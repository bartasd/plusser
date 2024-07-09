import style from "./App.module.css";
import { useState } from "react";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [log, setLog] = useState([]);

  const clicker = (num, who) => {
    if (who === "A") {
      setScore1((old) => old + num);
      setLog((prevLog) => {
        const newLog = [["A", num, score1 + num], ...prevLog];
        if (newLog.length > 10) {
          newLog.pop();
        }
        return newLog;
      });
    } else {
      setScore2((old) => old + num);
      setLog((prevLog) => {
        const newLog = [["B", num, score2 + num], ...prevLog];
        if (newLog.length > 10) {
          newLog.pop();
        }
        return newLog;
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.numbers}>
        <div>
          <p>SCORE A: {score1}</p>
          <div onClick={() => clicker(1, "A")}>+1</div>
          <div onClick={() => clicker(2, "A")}>+2</div>
          <div onClick={() => clicker(3, "A")}>+3</div>
        </div>
        <div>
          <p>SCORE B: {score2}</p>
          <div onClick={() => clicker(1, "B")}>+1</div>
          <div onClick={() => clicker(2, "B")}>+2</div>
          <div onClick={() => clicker(3, "B")}>+3</div>
        </div>
      </div>
      <div className={style.log}>
        {log.map((singleLog, index) => (
          <p key={index}>
            {singleLog[0]} + {singleLog[1]} = {singleLog[2]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
