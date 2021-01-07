import "./index.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Input from './Input'; 
import List from './List';
import { useState } from "react";

const App = () => {    

    const [flag, setFlag] = useState(false);
     
  return (
    <>
      <div className="top_div">
        <div className="row1">
          <h1> ToDo List</h1>
        </div>
        <div className="row2">
          <Button
            onClick={() => {
              setFlag(true);
            }}
          >             
            <AddIcon />
          </Button>
        </div>
      </div>
      <br />
      <hr />                
                
      { flag?<Input/>:<List/>} 
          
    </>
  );
    
};

export default App;