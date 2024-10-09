import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="contaier">
          <h3>BMI Calculator</h3>
          <form>
            <div>
              <label>Weight (ibs)</label>
              <input
                type="text"
                placeholder="Enter Weight value"
                value={weight}
              />
            </div>
            <div>
              <label>Height (in)</label>
              <input
                type="text"
                placeholder="Enter Height value"
                value={Height}
              />
            </div>

            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="center">
              <h3>Your BMI is:{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
