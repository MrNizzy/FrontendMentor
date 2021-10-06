import React, { useState } from "react";
import Cards from "./components/Cards";
import Data from "./data.json";

function App() {
  let [timeframe, setTimeframe] = useState(2);

  return (
    <>
      <main>
        <div className="card-profile">
          <div className="card-profile-top">
            <img src="./images/image-jeremy.png" alt="Profile" />
            <div>
              <span> Report for </span>
              <h1>
                Jeremy <br />
                Robson
              </h1>
            </div>
          </div>
          <div className="card-profile-bottom">
            <a
              onClick={() => setTimeframe((timeframe = 1))}
              className={timeframe === 1 ? "active" : ""}
            >
              Daily
            </a>
            <a
              onClick={() => setTimeframe((timeframe = 2))}
              className={timeframe === 2 ? "active" : ""}
            >
              Weekly
            </a>
            <a
              onClick={() => setTimeframe((timeframe = 3))}
              className={timeframe === 3 ? "active" : ""}
            >
              Monthly
            </a>
          </div>
        </div>
        <div className="card-group" id="cardGroup">
          {Data.map((value, key) => {
            return (
              <Cards
                key={key}
                title={value.title}
                timeframe={
                  timeframe === 1
                    ? "Last day"
                    : timeframe === 2
                    ? "Last week"
                    : timeframe === 3
                    ? "Last month"
                    : "none"
                }
                timeframeCurrent={
                  timeframe === 1
                    ? value.timeframes.daily.current
                    : timeframe === 2
                    ? value.timeframes.weekly.current
                    : value.timeframes.monthly.current
                }
                timeframePrevious={
                  timeframe === 1
                    ? value.timeframes.daily.previous
                    : timeframe === 2
                    ? value.timeframes.weekly.previous
                    : value.timeframes.monthly.previous
                }
              />
            );
          })}
        </div>
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
        . Coded by <a href="https://www.linkedin.com/in/mrnizzy/" target="_blank"> Nizzy Hernandez</a>.
      </div>
    </>
  );
}

export default App;
