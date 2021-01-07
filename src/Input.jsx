import React from "react";
import List from './List'; 
import { useState } from "react";

const Input = () => {
    
     const [item, setItem] = useState();      
     const [listItem, setAddItem] = useState(["Reading","Swimming","Cricket"]); 
    
    const listOfItems = () => {
            setAddItem((oldItems) => {
              return [...oldItems, item];
            });
            setItem("");
    }

     const inputItem = (event) => {
       setItem(event.target.value);
     };

    const keyPress = (e) => {
        if (e.keyCode === 13) {      
            listOfItems();                  
        }
    };    

    return (
      <>
        <div className="row4">
          <ul>
            {listItem.map((itemval, index) => {
              return <List key={index} id={index} item={itemval} />;
            })}
          </ul>
        </div>

        <div className="input_div">
          <ul>                 
                <input                  
                onChange={inputItem}
                value={item}
                onKeyDown={keyPress}
             />
          </ul>
        </div>
      </>
    );
 }
export default Input;