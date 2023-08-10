// Terminal.js

import React, { useState } from 'react';
import './style/Terminal.css';

function Terminal({routes}) {
    const [commands, setCommands] = useState([]);

    const handleCommand = (command) => {
        let output = "";
    
        // Split the command to handle commands with arguments
        const commandParts = command.split(' ');
        const mainCommand = commandParts[0];
        const args = commandParts.slice(1);
    
        switch (mainCommand) {
            case 'cd':
                if(args[0]) {
                    output = `Navigating to ${args[0]}...`;
                    // Logic to navigate or show info based on args[0]
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
    
    

    return (
        <div className="terminal">
            {commands.map((cmd, index) => (
                <div key={index}>
                    <div className="command-input">$ {cmd.input}</div>
                    <div className="command-output">{cmd.output}</div>
                </div>
            ))}
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
