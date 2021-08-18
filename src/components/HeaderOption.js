import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css';

const HeaderOption = ({Icon, title, avatar, onClick}) => {
  return(
    <div onClick={onClick} className="header__option">
      {Icon && <Icon className="" />}
      {avatar && <Avatar src={avatar} className="header__avatarClass" />}
      <h3>{title}</h3>
    </div>
  )
} 

export default HeaderOption
