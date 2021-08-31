import React from "react";
import "./Toggle.css";

function Toggle() {
    //const [discount, setDiscount] = useState()
       
      const toggleButton = () => {
          return(
           document.getElementById('ball1').classList.toggle('show'),
          document.getElementById('toggle1').classList.toggle('color'),
           document.getElementById('summ').innerHTML = (25 * {value}) / 100
          // setDiscount((25 * 0)/100)
          );

      };  
   

  return (
    <div className="flex">
      <div className="toggle" id="toggle1">
        <div className="ball" id="ball1" onClick={toggleButton}></div>
      </div>
     
      <div className="discount">25% discount</div>
    </div>
  );
}

export default Toggle;
