import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import './cart_item.css';
const Error_page= ()=>{
    return(
        <div  className="error">
    <Player
    autoplay
    loop
        src="https://assets8.lottiefiles.com/packages/lf20_a3kesdek.json"
        style={{width: '100%',padding:'0',margin:'0',justifySelf:'center' }}>
      </Player>
      <h2 className="a" style={{justify:"center"}}> something went wrong</h2>
        </div>
    )
}
export default Error_page;