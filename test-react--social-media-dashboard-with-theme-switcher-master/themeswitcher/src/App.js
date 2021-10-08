import React, { useState } from "react";
import Followers from "./components/Followers";
import Overviewtoday from "./components/OverviewToday";

function App() {
  const [theme, setTheme] = useState(1);
  return (
    <>
      <main className={theme == 0 ? "container dark" : "container light"}>
        <nav>
          <div>
            <h1>Social Media Dashboard</h1>
            <span className="nav-span-subtitle">Total Followers: 23,004</span>
          </div>
          <div className="switch">
            <span className="nav-span-subtitle">Dark Mode</span>
            <input type="checkbox"/>
          </div>
        </nav>
        <Followers />
        <Overviewtoday />
        <div class="attribution">
          <span>Challenge by</span>{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          <span>. Coded by </span>
          <a href="https://www.linkedin.com/in/mrnizzy/" target="_blank">
            Nizzy Hernandez
          </a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
