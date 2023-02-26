import AppBar from "./component/appbar";
import Posts from "./component/posts/posts.jsx";
import TabScrollButton from '@mui/material/TabScrollButton';
import "./App.css";
import About from "./about.js";
import Home from "./home.js";
import Contact from "./contact.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./single_post/single_post.js";
import Login from "./component/login.js";
import SignUp from "./component/signup.js";

function App() {
  return (
    <>
    
      <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/single_post" element={<SinglePost/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       
       
      </Routes>
    
      </>
  
  

  );
}
export default App;


