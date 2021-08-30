import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
   // const [discount, setDiscount] = useState('10');
       const ball = document.getElementById('ball1');
const toggle = document.getElementById('toggle1');
//const sum = document.getElementById('summ');

      const toggleButton = () => {
ball.classList.toggle('show');
        toggle.classList.toggle('color');
        //sum.innerHTML = ((25 *100)/100);
         //document.getElementById('summ').innerHTML = (25 * 100) / 100
          // setDiscount((25 * 0)/100)
      // console.log(setDiscount);
      };  
   

  return (
    <div className="flex">
      <div className="toggle" id="toggle1">
        <div className="ball" id="ball1" onClick={toggleButton}><small></small></div>
      </div>
     
      <div className="discount">25% discount</div>
    </div>
  );
}

export default Toggle;
