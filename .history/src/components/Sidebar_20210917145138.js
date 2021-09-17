import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import "./Sidebar.css"
function Sidebar() {
  const user = useSelector(selectUser)
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
          <Avatar src={user?.photoUrl}>{user.email[0]}</Avatar>
          <h2>{user?.displayName}</h2>
          <p>{user?.email}</p>
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
