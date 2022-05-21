import  React, { useState }  from 'react';
import SearchInput from './Searchinput';
import MenuItem from './menu_item';
import CartItem from './cart_item';
import Menu from "../menu.json";
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
            Menu.map(category=>{
              return(
                <div>
                  <h1>{category.category}</h1>
                  {
                    category.items.map(item =>{
                      return(
                        <div>
                          <MenuItem item={item} />
                        </div>
                      )
                    })
                  }
                  </div>
              )
            })
          }
        
        <button onClick={()=>{console.log(Menu);}}>see</button>
        </div>
    </div>

  )
}

export default App;
