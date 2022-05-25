import React, { useState } from "react";
import './menu_items.css';
import Menu from "../menu.json";
import veg_icon from "../components/veg.png";
import nonveg_icon from "../components/non_veg.png";
const MenuItem = (props)=>{
    const [quantity,changequantity] = useState(0);
    useState(()=>{
        props.item.quantity=quantity;
        console.log("props is "+props.item.id)
    });
        //----------------------------updating the quantity of the dish------------------
    Menu.menu.map(category =>{
        category.items.map(dish =>{
            if(dish.id===props.item.id)
                {
                dish.quantity=quantity;
                console.log(dish);
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
                <h4>₹{props.item.cost}</h4>
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




