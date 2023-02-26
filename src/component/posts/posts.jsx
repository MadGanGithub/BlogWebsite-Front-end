import "./posts.css";
import Post from "../post";
import { NavLink } from "react-router-dom";

export default function post() {
  return (
    
    <div className="posts_list">
      
      <NavLink to="/single_post" style={{textDecoration:"none"}}><Post></Post></NavLink> 
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  )
}
