import  React  from 'react';
import SearchInput from './Searchinput';
import MenuItem from './menu_item';
import Menu from "../menu.json";
import axios from "axios";
import cart_image from "./bag.png"
import { Player } from '@lottiefiles/react-lottie-player';
import './App.css'
const App =()=>{
  return(
    <div >

      <div className='header'> 
      <h3>{Menu.restaurant_name}</h3>
      <a href='#'><img src={cart_image} alt="cart"></img></a>
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
        </div>
          :
          <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_fq7ktikb.json"
          style={{ height: '400px', width: '400px',justifySelf:'center' }}>
        </Player>
        }

        
    </div>

  )
}

export default App;
