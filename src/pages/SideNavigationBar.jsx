import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link,NavLink } from 'react-router-dom';
import '../styles/sidebar.css'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const customstyles = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center",
    color:"#B3B8BB",
    marginTop:"15px",
    borderRadius:"50%",
    paddingRight:"10px",
    
}

const SideNavigationBar = () => {
  return (
<Sidebar
    className='sideBar'
    width='200px'
    collapsed={true}
    collapsedWidth='73px'
    backgroundColor='#333333'
>
  <Menu 
  className="menu-vertical"
  >
    <div>
    <MenuItem style={customstyles} icon={<AutoAwesomeMosaicIcon/>}></MenuItem>
    <MenuItem style={customstyles} icon={<LocalGroceryStoreIcon/>}></MenuItem>
    <MenuItem style={customstyles} icon={<StorefrontIcon/>}></MenuItem>
    <MenuItem style={customstyles} icon={<AccountBoxIcon/>}></MenuItem>
    </div>
    <div style={{height:"10px"}}></div>
  </Menu>
</Sidebar>
  )
}

export default SideNavigationBar
