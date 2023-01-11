import AppBar from "./component/appbar";
import Posts from "./component/posts/posts.jsx";
import "./App.css";
import { Paper } from "@mui/material";
import About from "./about.js";



import TabScrollButton from '@mui/material/TabScrollButton';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
     <Paper>
    <div className="App">
    <>
      <AppBar></AppBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <div className="posts">
      <Posts></Posts>
      </div>
      <br></br>
      <TabScrollButton orientation="vertical" direction="left" style={{backgroundColor:'black',color:'white'}}/>
    
     
     
      <Routes>
       
        <Route path="/about" component={About}/>
        
      </Routes>
     
    
      </>
    </div>
    </Paper>
  
  

    
  );
}

export default App;


