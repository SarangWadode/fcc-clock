import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Clock 25 + 5</h1>
      <div className="break-len">
        <div id="break-label">Break Length</div>
        <button id="break-decrement">up</button>
        <div id="break-length">5</div>
        <button id="break-increment">down</button>
      </div>

      <div className="session-len">
        <div id="session-label">Session Length</div>
        <button id="session-decrement">up</button>
        <div id="session-length">25</div>
        <button id="session-increment">down</button>
      </div>

      <div className="session">
        <div id="timer-label">Session</div>
        {/* <div id="time-left">25:00</div> */}
      </div>

      <div className="controls">
        <button id="start_stop">Start</button>
      </div>
    </div>
  );
}

export default App;
