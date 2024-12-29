import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const fetchedAdvice = async () => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  return response.data.slip.advice;
};

function App() {
  const [advice, setAdvice] = useState("Hello");

  const getAdvice = async () => {
    const adviceResponse = await fetchedAdvice();
    setAdvice(adviceResponse);
  };

  return (
    <div className="mainDiv">
      <div className="card">
        <p className="advice">{advice}</p>
        <button onClick={getAdvice}>go</button>
      </div>
    </div>
  );
}

export default App;
