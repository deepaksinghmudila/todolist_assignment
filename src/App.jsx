import "./index.css";
import AddIcon from "@material-ui/icons/Add"; 
import Input from './Input';  
import { useState } from "react";

 const App = () => {
   const [flag, setFlag] = useState(false);

   return (
     <>
       <div className="top_div">
         <div className="left">
           <h1> ToDo List</h1>
         </div>
         <div className="right">
           <button
             onClick={() => {
               setFlag(true);
             }}
           >
             <AddIcon />
           </button>
         </div>
       </div>
       <div className="line">
         <hr />
       </div>

       <Input value={flag} />
     </>
   );
 };

export default App;