import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import logo from '../logo.png';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Logo" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search here..." />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Something" Icon={HomeIcon}></HeaderOption>  
        <HeaderOption title="Something" Icon={HomeIcon}></HeaderOption>  
        <HeaderOption title="Something" Icon={HomeIcon}></HeaderOption>  
        <HeaderOption title="Something" Icon={HomeIcon}></HeaderOption>  
        <HeaderOption title="Me" Icon={HomeIcon}></HeaderOption>  
      </div>
    </div>
  )
}

export default Header
