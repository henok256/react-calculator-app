

export const Calculator = ({handleClearClick, handleNumberClick, handleOperatorClick, result}) => {
    
 
  return (
    <div className="container">
         <input type="text" value={result} disabled className="result-display"/>
      <br />
      <br/>
      <button className="button-box" value="1" onClick={handleNumberClick}>1</button>
      <button className="button-box" value="2" onClick={handleNumberClick}>2</button>
      <button className="button-box" value="3" onClick={handleNumberClick}>3</button>
      <button className="button-box" value="+" onClick={handleOperatorClick}>+</button>
      <br />
      <button className="button-box" value="4" onClick={handleNumberClick}>4</button>
      <button className="button-box" value="5" onClick={handleNumberClick}>5</button>
      <button className="button-box" value="6" onClick={handleNumberClick}>6</button>
      <button className="button-box" value="-" onClick={handleOperatorClick}>-</button>
      <br />
      <button className="button-box" value="7" onClick={handleNumberClick}>7</button>
      <button className="button-box" value="8" onClick={handleNumberClick}>8</button>
      <button className="button-box" value="9" onClick={handleNumberClick}>9</button>
      <button className="button-box" value="*" onClick={handleOperatorClick}>*</button>
      <br />
      <button className="button-box" value="0" onClick={handleNumberClick}>0</button>
      <button className="button-box" value="C" onClick={handleClearClick}>C</button>
      <button className="button-box" value="/" onClick={handleOperatorClick}>/</button>
      <button className="button-box" value="=" onClick={handleOperatorClick}>=</button>
    </div>
  )
}
