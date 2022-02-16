import React from "react";
import "./card.css";
import Pic from "./images/image-equilibrium.jpg";
import Ethe from "./images/icon-ethereum.svg";
import Clock from "./images/icon-clock.svg";
import Avatar from "./images/image-avatar.png";


function Card(){
    return(
        <div className="content">
            <div className="picture">
                <img src={Pic}></img>
                <h2>Equilibrium#3429</h2>
                <p>Our equilibrium collection promotes<br></br>balance and calm.</p>
            </div>
            <div className="box">
                <img src={Ethe}></img> &nbsp; &nbsp;0.041ETH &nbsp; &nbsp; <img src={Clock}></img>3 days left
                <hr></hr>
            </div>
            <div>
                <div className="last">
                <div className="image">
                    <img src={Avatar}></img>
                </div>
                <div className="text">
                    <p>creation of <span>Jules Wyvern</span></p>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Card;