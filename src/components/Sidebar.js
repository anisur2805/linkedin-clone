import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  const recentItem = (topic) => {
    return(
      <div className="sidebar__recentItem">
        <div className="recentItem__hash">#</div>
        {topic}
      </div>
    )
  }
  return (
      <div className="sidebar">
        <div className="sidebar__top">
          <img src="https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il" alt="" />
          <Avatar />
          <h2>Anisur Rahman</h2>
          <p>anisur2805@gmail.com</p>
        </div>
        
        <div className="sidebar__stats ">
          <div className="sidebar__stat">
            <p>Who viewed your profile</p>
            <div className="sidebar__statsNumber">46</div>
          </div>
          <div className="sidebar__stat">
           <p> Views of your post</p>
            <div className="sidebar__statsNumber">71</div>
          </div>
        </div>
        
        <div className="sidebar__bottom">
          <p>Recent</p>   
          {recentItem('reactjs')}       
          {recentItem('javascript')}       
          {recentItem('PHP')}       
        </div>
      </div>
  )
}

export default Sidebar
