import React from "react";
import AppBar from "./component/appbar";
import Posts from "./component/posts/posts.jsx";
import TabScrollButton from '@mui/material/TabScrollButton';


const Home = () => {
return (
	<div style={{paddingTop:100}}>
	 <AppBar style={{postion:"relative"}}></AppBar>
 
       
       <div className="main_content" >  

       <div id="post" style={{marginLeft:300}}>
       <Posts></Posts>    
       </div>

       <br></br>
       <TabScrollButton orientation="vertical" direction="left" style={{backgroundColor:'black',color:'white'}}/>
    
       </div>
     
      

	</div>
);
};

export default Home;
