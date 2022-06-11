import React, { useReducer } from "react";
import SearchInput from './Searchinput';
import Menujson from '../menu.json'
import MenuItem from './menu_item';
import { Player } from '@lottiefiles/react-lottie-player';
fetch(`https://menu-dummy.herokuapp.com/`)
.then((response)=>response.json())
.then((Menujson));
const Menu_page= (props)=>{
  const [Menu,dispatch]=useReducer(Menujson,[],()=>{
    const localData =localStorage.getItem('menu');
    console.log(localData)
    return localData ? JSON.parse(localData) :()=>{localStorage.setItem('menu',JSON.stringify(Menujson));return JSON.stringify(Menujson) }
  });
  console.log(Menu)
  
    return(
    <div >
    <div className='header'> 
    <h3>{Menu.restaurant_name}</h3>
    <a href="/cart">
    <Player
    autoplay
    loop
        src="https://assets3.lottiefiles.com/private_files/lf30_ex6xbay5.json"
        style={{width: '10vw',padding:'0',margin:'0',justifySelf:'center' }}>
      </Player>
    </a>
    </div>
      <SearchInput />
      {
        Menu.taking_orders?
        <div>
        {
          Menu.menu.map(category=>{
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
      <button onClick={()=>{

        }}>fetch</button>
      
      </div>
        :
        <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_fq7ktikb.json"
        style={{width: '100%',justifySelf:'center' }}>
      </Player>
      }
  </div>
    )
}
export default Menu_page;