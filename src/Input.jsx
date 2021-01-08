import React from "react";
import List from './List'; 
import { useState } from "react";

const Input = (props) => {
    
     const [item, setItem] = useState();      
     const [listItem, setAddItem] = useState(["Yoga class","Swimming","Reading"]); 
     
    
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
          {listItem.map((itemval, index) => {
            return <List key={index} id={index} item={itemval} />;
          })}
        </div>

        <div className="input_div">
          {props.value ? (
            <ul>
              <input                
                type="text"
                onChange={inputItem}
                value={item}
                onKeyDown={keyPress}
                className="task_field"
              />
              <hr/>
            </ul>
          ) : (
            <ul>
              <input
                hidden="yes"
                onChange={inputItem}
                value={item}
                onKeyDown={keyPress}
              />
            </ul>
          )}
        </div>
      </>
    );
 }
export default Input;