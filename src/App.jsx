import "./index.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";


const App = () => {   

  return (
    <>
      <div className="top_div">
        <div className="row1">
          <h1> ToDo List</h1>
        </div>
        <div className="row2">
          <Button>
            <AddIcon />
          </Button>
        </div>
      </div>
      <br/>
      <hr />


          <div className="line_div">

          </div>
          
    </>
  );
    
};

export default App;