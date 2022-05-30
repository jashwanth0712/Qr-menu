import React, { useState } from "react";
import './menu_items.css';
import veg_icon from "../components/veg.png";
import nonveg_icon from "../components/non_veg.png";
import { Player } from '@lottiefiles/react-lottie-player';
const result = localStorage.getItem("menu");
let Menu= JSON.parse(result);

const MenuItem = (props)=>{
    console.log("parsed menu is ",Menu.menu);
    localStorage.setItem('menu',JSON.stringify(Menu));
    console.log("updated the data");
    const [quantity,changequantity] = useState(props.item.quantity);
    useState(()=>{
        props.item.quantity=quantity;
        Menu.menu.map(category =>{
            category.items.map(dish =>{
                if(dish.id===props.item.id)
                    {
                    dish.quantity=quantity;
                    localStorage.setItem('menu',JSON.stringify(Menu));
                    //console.log(dish);
                    }
                })
            })
        console.log("usestate menu is : "+JSON.stringify(Menu.menu[0]))
        console.log("Set")

    });
        //----------------------------updating the quantity of the dish------------------
    Menu.menu.map(category =>{
        category.items.map(dish =>{
            if(dish.id===props.item.id)
                {
                dish.quantity=quantity;
                //console.log(dish);
                }
            })
        })
    
    return(
<div className="card">
{props.item.is_available?
    <img src={props.item.image} alt='dish'></img>
:
<img src={props.item.image} style={{ filter : 'grayscale(100%)' }} alt='dish'></img>

}
    <div className="details">
        <div className="horizontal">
        <h5>{props.item.name}</h5>
    {props.item.veg_or_not ==="veg"?
    <img src={veg_icon}></img>
    :
    <img src={nonveg_icon}></img>

    }
        </div>
        
        <p>{props.item.description}</p>
        {props.item.is_available?
                <div className="horizontal">
                    {props.item.discount==0?
                <h4>₹{props.item.cost}</h4>
            :
            <div className="discount">
                <strike><h4 className="striked" >₹{props.item.cost}</h4></strike>
              <div className="s" style={{display:"flex"}}>
                    
            <h4 className="g " style={{color:"green"}}>₹{props.item.cost *(1- props.item.discount/100)}  </h4>
            <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_FM9Hwb.json"
          style={{width: '100%',justifySelf:'center' }}>
        </Player>
              </div>
            </div>}
                <div className="quantity_changer">
    
                <button onClick={()=>{if(quantity>=1){changequantity(quantity -1);console.log("decremented");}}}><i>-</i></button>  
                <h4>{quantity}</h4>
                <button onClick={()=>{console.log("incremented");changequantity(quantity +1);}}><i>+</i></button>
                </div>
            </div>
            :
            <div><h5>currently unavailable</h5></div>}
        </div>
</div>
    )
}
export default MenuItem;




