import './App.css';
// import { useState } from 'react';
import Demo from './Demo'
 
function App() {

  
  return (
    <div className="App">
      <h1>Clock 25 + 5</h1>

      <div className="length-wrapper">
        <Demo wrapper={"break-len"} label={"break-label"} id={"break-length"} length={5} decrement={"break-decrement"} increment={"break-increment"} />
        <Demo wrapper={"session-len"} label={"session-label"} id={"session-length"} length={25} decrement={"session-decrement"} increment={"session-increment"} />
      </div>

      <div className="session">
        <div id="timer-label">Session</div>
        {/* <div id="time-left">25:00</div> */}
      </div>

      <div className="controls">
        <button id="start_stop">Start</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
