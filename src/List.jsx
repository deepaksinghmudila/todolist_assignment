 import React from "react";

 const List = (props) => {
   return (
     <>
       <div className="list_item">
               {<li> <input type="radio" /> {props.item} </li> } 
       </div>
           <div className="line_div">
                 <hr/>
           </div>
     </>
   );
 };
 export default List;