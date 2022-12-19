import React, { useState, useEffect } from "react";
import MyTimer from "./components/MyTimer";

export default function App() {
  const [flag, setFlag] = useState(false);
  //const [time, setTime] = useState(10800);

  const time = new Date();
  //time.setSeconds(time.getSeconds() + 30); // 10 minutes timer
  const SetTime = () => {
    time.setSeconds(10800);
  };

  SetTime();
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Show timer</button>

      <div>
        {flag ? (
          <MyTimer expiryTimestamp={time} SetTime={SetTime} />
        ) : (
          "HELLOW FROM REACT"
        )}
      </div>
    </div>
  );
}
