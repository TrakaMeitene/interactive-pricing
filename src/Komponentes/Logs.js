import React, { useState } from 'react';
import "./Logs.css";
import Toggle from "./Toggle.js";
import Saraksts from './Saraksts.js';


function Logs() {
  const [enteredRange, setPageviews] = useState('10');
  const [value, setPricePerMonth] = useState(8);
 
  

const divasFunkcijas = (event) => {
 
  if(event.target.value==="1") 
  {
    setPageviews('10K');
    setPricePerMonth(8);
  }
  if(event.target.value==="2") 
  {
    setPageviews('50K');
    setPricePerMonth(12);
  }

  if(event.target.value==="3") 
  {
    setPageviews('100K');
    setPricePerMonth(16);
  }

  if(event.target.value==="4") 
  {
    setPageviews('500K');
    setPricePerMonth(25);
  }

  if(event.target.value==="5") 
  {
    setPageviews('1M');
    setPricePerMonth(26);
  }


  

   

};


  return (
    <div>
      <div className="Logs">
        <div className="teksti">
          <p className="views"><span id="amount">{enteredRange}</span>PAGEVIEWS</p>
          <p><span className="amount" id="summ" >${value}.00</span>/month</p>
        </div>
        <div className="slider">
        <input 
        className="range" 
        type="range"  
        name="vol" 
        min="1" 
        max="5" 
        step="1"
        id="myRange" 
        
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
