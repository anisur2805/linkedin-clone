import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css';

const HeaderOption = ({Icon, title, avatar, onClick}) => {
  const user = useSelector(selectUser)
  return(
    <div onClick={onClick} className="header__option">
      {Icon && <Icon className="" />}
      {avatar && <Avatar src={user.photoURL} className="header__avatarClass">{user?.email[0]}</Avatar>}
      <h3>{title}</h3>
    </div>
  )
} 

export default HeaderOption
