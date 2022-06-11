import React, { useState } from "react";
import CartItem  from "./cart_item";
import Menujson from '../menu.json';

import './cart_item.css';
import { Player } from '@lottiefiles/react-lottie-player';

const result=localStorage.getItem('menu');
if(!result)
{
    localStorage.setItem('menu',JSON.stringify(Menujson));   
}
console.log("cart ran and menu is "+result);
const Menu =JSON.parse(result);
let total=0;
    const cart_list=[];
    for( let i=0;i<Menu.menu.length;i++ )
    {
    console.log("starting loop ran");
      // console.log(Menu.menu[i]);
      for( let j=0;j< Menu.menu[i].items.length;j++)
      {
          //console.log(Menu.menu[i].items[j]);
          let present_item=Menu.menu[i].items[j];
          total+=present_item.cost*present_item.quantity*(1-present_item.discount/100);
          if(present_item.quantity!==0)
          {
              cart_list.push(present_item);
          }
      }
    }
const Cart  =(props)=>{
    
    const [current_total,update_total]= useState(total);


    console.log("total is "+total+ " , current total  is  "+ current_total);
    
    return(
      <div>
        <div className="cart_header">
            <a href="/">
            <div className="backbutton"  >
            <i class="angle big left icon" ></i>
            </div>
            </a>
        <h1>Cart</h1>
        </div>
          
    {
  current_total==0?
    <div>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/private_files/lf30_oqpbtola.json"
          style={{  width: '100%',justifySelf:'center' }}>
        </Player>
        <h2 style={{display:"flex", justifyContent:"center"} }>your cart is empty</h2>
    </div>
      :
      <div>
        {cart_list.map(item =>{
                return(
                    <div>
                        {
                            item.quantity>0?
                            <CartItem item={item} 
                            onChange={value =>
                                {
                                update_total(current_total+value*item.cost*(1-item.discount/100));
                               
                                if(item.quantity==1 &&value==-1)
                                {
                                    console.log(cart_list.indexOf(item));console.log("spliced" )
                                }
                                }} />
                            :
                            <div></div>
                        }
                    
                    </div>
                )
            })
        }
        <div class="grid-container">
        <div class="grid-item" style={{width:'100px'}}><h4></h4></div>
        <div class="grid-item">
            <h4>
           total
            </h4>
        </div>
        <div class="grid-item" style={{width:'30px'}}><h4>{current_total}</h4></div>
        </div>
                <button onClick={()=>{console.log(Menu);}}>see</button>
        </div>
          }
      </div>  
        )
}
export default Cart;