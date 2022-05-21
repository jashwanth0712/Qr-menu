import React from "react";
import './cart_item.css';
const CartItem =(props)=>{
    return(
        
        <div className="horizontal ">
            <div class="grid-container">
  <div class="grid-item" style={{width:'80px'}}>{props.item.name}</div>
  <div class="grid-item">
      <div className="quantity_changer">
            <button><i>-</i></button>  
            <h4>{props.item.quantity}</h4>
            <button ><i>+</i></button>
        </div>
    </div>
  <div class="grid-item" style={{width:'50px'}}>₹{props.item.cost * props.item.quantity}</div>  
</div>
            
        </div>
    )
}
export default CartItem;