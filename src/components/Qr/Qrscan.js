import React from 'react';
import Picture from '../Qr/images/code.png';
import './Qrscan.css';

function Qrscan() {
  return (
   
      <div className="container">
        <div className="pic">
        <img src={Picture}></img>
       
        </div>
        <div>
          <h2>Improve your front end <br></br> Skils by building projects</h2>
          <p>Scan the qr code to visit Frontend<br></br>Mentor and take your coding skills to<br></br>the next level</p>
        </div>
        </div> 
        
  )
}

export default Qrscan;
