import  React, { useState }  from 'react';
import SearchInput from './Searchinput';
import MenuItem from './menu_item';
import CartItem from './cart_item';
import menu from "../menu.json";
const data1={
  name:"chicken biryani",
  cost:100,
  description:"delicious and must try chicken biryani",
  quantity:0,
  discount:0,
  is_available:true,
  category:"biryani",
  type:"non_veg",
  image:"https://biryanigurucom.files.wordpress.com/2018/03/chicken-biryani.jpg?w=2560",
  serves:"serves 1-2"
}
const data2={
  name:"kebab",
  cost:150,
  description:"delicious and must try chicken biryani",
  quantity:10,
  discount:0,
  is_available:true,
  type:"non_veg",
  image:'https://th.bing.com/th/id/OIP.xFtSW7uUQlZYzgpEe7EL-QHaHa?pid=ImgDet&rs=1',
  serves:"serves 1-2"
}
const App =()=>{
  return(
    <div className='ui container' style={{marginTop:'30px'}}>
        <SearchInput />
        <div>
          {
            menu.map(item=>{
              return(
                <MenuItem item={item} />
              )
            })
          }
        <h1>Cart</h1>
        <CartItem item={data1}/>
        <CartItem item={data1}/>
        <CartItem item={data2}/>
        </div>
    </div>

  )
}

export default App;
