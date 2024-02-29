import React from 'react';
import './style/Home.css';


function Home() {
  return (
    <div className="home">
    <h2>Why a Terminal:</h2>
    <p>
      I thought I'd try something new and interesting. Since I use command line so much to the point I completely forgo Finder on Mac, I thought maybe developers who visit my site would find it a warm welcome to a familiar navigation system.
    </p>
    <h2>What you can try:</h2>
    <ul>
      <li><code>ls</code>: <span>This lists the available tabs as folders.</span></li>
      <li><code>cd [folderName]</code>: <span>This takes you to the page that you indicate, replace [folderName] with one of the listed items.</span></li>
      <li><code>clear</code>: <span>Clears the terminal screen, removing all previous commands and outputs for a clean view.</span></li>
      <li><code>uptime</code>: <span>Displays a message about the website's uptime, typically indicating the site is always accessible.</span></li>
      <li><code>whoami</code>: <span>Displays the current user identity, which defaults to "Guest" for all users.</span></li>
      <li><code>date</code>: <span>Shows the current date and time, formatted according to your locale settings.</span></li>
      <li><code>echo [text]</code>: <span>Repeats back the text entered after the command, useful for displaying messages in the terminal.</span></li>
    </ul>
  </div>
  );
}

export default Home;
