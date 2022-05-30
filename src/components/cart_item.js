import React,{useState} from "react";
import './cart_item.css';
const Menu=JSON.parse( localStorage.getItem('menu'));
const CartItem =(props)=>{
    const [quantity,changequantity] = useState(props.item.quantity);
    useState(()=>{
        props.item.quantity=quantity;

    });
        //----------------------------updating the quantity of the dish------------------
    Menu.menu.map(category =>{
        category.items.map(dish =>{
            if(dish.id===props.item.id && dish.quantity!=0)
                {
                dish.quantity=quantity;
                console.log(dish);
                }
            })
        })
        console.log(JSON.stringify(Menu));
    // localStorage.setItem('menu',Menu);
    return(
        
        <div className="horizontal ">
            <div class="grid-container">
            <div class="grid-item" style={{width:'80px'}}>{props.item.name}</div>
            <div class="grid-item">
            <div className="quantity_changer">
                            <button onClick={()=>{if(quantity>=1){changequantity(quantity -1);console.log("decremented"); props.onChange(-1)} }}><i>-</i></button>  
                            <h4>{quantity}</h4>
                            <button onClick={()=>{console.log("incremented");changequantity(quantity +1);props.onChange(1)}}><i>+</i></button>
            </div>
            </div>
            <div class="grid-item" style={{width:'50px'}}>₹{props.item.cost * props.item.quantity}</div>  
            </div>
            
        </div>
    )
}
export default CartItem;