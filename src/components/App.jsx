import './App.css';

function App() {
  const now = Date.now();
  const then = now + 1000 * 60 * 25;
  let timeLeft = (then - now)/1000;
  console.log(now);
  console.log(then);
  // console.log(timeLeft);
  setInterval(() => {
    timeLeft = timeLeft - 1;
    console.log(timeLeft);
  },1000)
  return (
    <div className="App">
      <h1>Clock 25 + 5</h1>

      <div className="length-wrapper">
        <div className="break-len">
          <div id="break-label">Break Length</div>
          <div className="controls">
            <button id="break-decrement">up</button>
            <div id="break-length">5</div>
            <button id="break-increment">down</button>
          </div>
        </div>

        <div className="session-len">
          <div id="session-label">Session Length</div>
          <div className="controls">
            <button id="session-decrement">up</button>
            <div id="session-length">25</div>
            <button id="session-increment">down</button>
          </div>
        </div>
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
