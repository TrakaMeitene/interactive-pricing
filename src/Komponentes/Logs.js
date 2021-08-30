import React, { useState } from 'react';
import "./Logs.css";
import Toggle from "./Toggle.js";
import Saraksts from './Saraksts.js';

//const DUMMY = [

 // {
//value: 10,
  //},
 // {
  //  value:100,
 // },
//];

function Logs() {
  const [enteredRange, setEnteredRange] = useState('10');
  const [value, setValue] = useState(8);
 
  //const [discount, setDiscount] = useState()

const divasFunkcijas = (event) => {
 setEnteredRange(event.target.value);
setValue(event.target.value);

//setDiscount((25 * value)/100);


   

};


  return (
    <div>
      <div className="Logs">
        <div className="teksti">
          <p className="views"><span id="amount">{enteredRange}</span>K PAGEVIEWS</p>
          <p><span className="amount" id="summ" >${value}.00</span>/month</p>
        </div>
        <div className="slider">
        <input 
        className="range" 
        type="range"  
        name="vol" 
        min="10" 
        max="600" 
        step="40"
        id="myRange" 
        value={value}
        onChange={divasFunkcijas}
        //onChange={rangeChangeHandler}
        //onChange={e => setValue(e.target.value)}
       // onChangeRange={(event) => rangeChangeHandler(event.target.value)}
        />

        </div>
        <Toggle />
        <Saraksts/>
      </div>
    
    </div>
  );
};

export default Logs;
