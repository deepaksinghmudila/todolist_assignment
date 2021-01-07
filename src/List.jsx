import React from 'react'; 

const List =  (props) => {
                
    return (
      <>
        <div className="list_item">                        
           <li>{props.item}</li>
        </div>
      </>
    );
}

export default List;