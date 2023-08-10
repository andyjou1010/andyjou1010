// Terminal.js

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Terminal.css';

function Terminal({routes}) {
    const [commands, setCommands] = useState([]);
    const [locationStack, setLocationStack] = useState(['/']);  // Initialize with home route.
    const navigate = useNavigate();
    const endOfTerminalRef = useRef(null);

    const handleCommand = (command) => {
        let output = "";
    
        // Split the command to handle commands with arguments
        const commandParts = command.split(' ');
        const mainCommand = commandParts[0];
        const args = commandParts.slice(1);
    
        switch (mainCommand) {
            case 'cd':
                if(args[0]) {
                    if (args[0] === "home") {
                        output = `Navigating to home...`;
                        setLocationStack(prevStack => [...prevStack, '/']); // Push home route to stack
                        navigate(`/`);
                    } else if (args[0] === "..") {
                        // Go back to previous location
                        if (locationStack.length > 1) {
                            const prevLocation = locationStack[locationStack.length - 2]; // Get second last item
                            setLocationStack(prevStack => prevStack.slice(0, -1)); // Remove last item
                            output = `Navigating back to ${prevLocation === '/' ? 'home' : prevLocation}...`;
                            navigate(prevLocation);
                        } else {
                            output = "You're already at the root directory.";
                        }
                    } else if (routes.some(route => route.path.substring(1) === args[0])) {  
                        // Checking if the route exists
                        output = `Navigating to ${args[0]}...`;
                        setLocationStack(prevStack => [...prevStack, `/${args[0]}`]); // Push new route to stack
                        navigate(`/${args[0]}`);
                    } else {
                        output = `No such location: ${args[0]}`;
                    }
                } else {
                    output = "Please specify a destination.";
                }
                break;
            
            case 'ls':
                output = routes.map(route => route.name).join('\n');
                break;
    
            case 'clear':
                // For clear, you might want to set the commands state to an empty array
                setCommands([]);
                return; 
            
            case 'uptime':
                output = "Website uptime: Always awake!"; // This is a fictional response. You can make this dynamic if you want.
                break;
    
            case 'whoami':
                output = "Guest";
                break;
            
            case 'date':
                output = new Date().toLocaleString();
                break;
    
            case 'echo':
                output = args.join(' '); // Echoes whatever comes after the 'echo' command
                break;
    
            default:
                output = "Command not recognized.";
                break;
        }
    
        setCommands(prevCommands => [...prevCommands, { input: command, output }]);
    };

    useEffect(() => {
        if (endOfTerminalRef.current) {
            endOfTerminalRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [commands]);
    
    

    return (
        <div className="terminal">
            {commands.map((cmd, index) => (
                <div key={index}>
                    <div className="command-input">$ {cmd.input}</div>
                    <div className="command-output">{cmd.output}</div>
                </div>
            ))}
            <div ref={endOfTerminalRef}></div> {/* This will be our marker for the end */}
            <CommandInput onEnter={handleCommand} />
        </div>
    );
}

function CommandInput({ onEnter }) {
    const [input, setInput] = useState("");

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            onEnter(input);
            setInput("");
        }
    };

    return (
        <div className="command-input">
            $ <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default Terminal;
