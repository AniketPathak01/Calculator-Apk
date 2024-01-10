import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleOnClick =(event) =>{
    setResult(result.concat(event.target.name))
  }
  const clear = () =>{
    setResult("")
  }

  const backspace = ()=>{
    setResult(result.slice(0, -1));
  }

  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error")
    }
  }

  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" id="clear" onClick={clear}>Clear</button>
          <button className="highlight" id="backspace" onClick={backspace}>C</button>
          <button className="highlight" name="/" onClick={handleOnClick}>&divide;</button>
          <button name="7" onClick={handleOnClick}>7</button>
          <button name="8" onClick={handleOnClick}>8</button>
          <button name="9" onClick={handleOnClick}>9</button>
          <button className="highlight" name="*" onClick={handleOnClick}>&times;</button>
          <button name="4" onClick={handleOnClick}>4</button>
          <button name="5" onClick={handleOnClick}>5</button>
          <button name="6" onClick={handleOnClick}>6</button>
          <button className="highlight" name="-" onClick={handleOnClick}>&ndash;</button>
          <button name="1" onClick={handleOnClick}>1</button>
          <button name="2" onClick={handleOnClick}>2</button>
          <button name="3" onClick={handleOnClick}>3</button>
          <button className="highlight" name="+" onClick={handleOnClick}>+</button>
          <button name="0" onClick={handleOnClick}>0</button>
          <button name="." onClick={handleOnClick}>.</button>
          <button className="highlight" id="equalto" onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
