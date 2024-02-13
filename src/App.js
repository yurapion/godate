import React, { useState } from "react";
import unicornGif1 from './happy-unicorn.gif'; // Update with actual path
import unicornGif2 from './spinning-molang.gif'; // Update with actual path
// import helloImage from './hello.jpg'; // Update with actual path
import "./App.css";

function App() {
  const [noPosition, setNoPosition] = useState({
    transition: "all 0.3s ease-in-out",
    left: 0,
  })

  const handleNoButtonMouseMove = (e) => {
    setNoPosition(prevState => {
      // Generate -1 or 1 randomly for x and y
      const randomSignX = Math.random() < 0.5 ? -1 : 1;
      const randomSignY = Math.random() < 0.5 ? -1 : 1;
      
      // Calculate random position for x and y
      const randomX = randomSignX * Math.random() * 100;
      const randomY = randomSignY * Math.random() * 100;
  
      return {
        ...prevState,
        left: `${Math.random() * 100}%`,
        transform: `translate(${randomX}%, ${randomY}%)`
      };
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={helloImage} className="Hello-text" alt="Hello" /> */}
      </header>
      <main>
        <div className="Unicorn-gif-container">
          <img src={unicornGif1} className="Unicorn-gif" alt="Happy Unicorn" />
          <img src={unicornGif2} className="Unicorn-gif" alt="Spinning Molang" />
        </div>
        <h1>Do you want to go on a date with me?</h1>
        <div className="Response-buttons">
          <button className="Yes-button">Yes</button>
          <button className="No-button" style={noPosition} onMouseEnter={handleNoButtonMouseMove}>No</button>
        </div>
      </main>
    </div>
  );
}

export default App;
