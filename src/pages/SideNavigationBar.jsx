import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link,NavLink } from 'react-router-dom';
import '../styles/sidebar.css'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const customstyles = {
    display:"flex",
    flexDirection:"row",
    color:"#B3B8BB",
    marginTop:"11px",
    borderRadius:"50%",
    paddingRight:"15px",
    paddingLeft:"5px",
    height:"39px"
}
const customstyles1 = {
  display:"flex",
  flexDirection:"row",
  color:"#B3B8BB",
  marginTop:"11px",
  borderRadius:"50%",
  paddingRight:"15px",
  paddingLeft:"5px",
  backgroundColor:"#5078E1",
  color:"white",
  height:"39px"
}

const SideNavigationBar = () => {
  return (
<Sidebar
    className='sideBar'
    width='200px'
    collapsed={true}
    collapsedWidth='65px'
    backgroundColor='#333333'
>
  <Menu 
  className="menu-vertical"
  >
    <div>
    <MenuItem style={customstyles1} icon={<KeyboardArrowRightIcon style={{height:"30px",width:"25px"}}/>}></MenuItem>
    <hr style={{marginTop:"20px",color:"#d5d9e2",marginBottom:"20px"}}/>
    <MenuItem style={customstyles} icon={<AutoAwesomeMosaicIcon style={{height:"20px",width:"20px"}}/>} component={<NavLink to="/" />}></MenuItem>
    <MenuItem style={customstyles} icon={<LocalGroceryStoreIcon style={{height:"20px",width:"20px"}}/>} component={<NavLink to="/page1" />}></MenuItem>
    <MenuItem style={customstyles} icon={<StorefrontIcon style={{height:"20px",width:"20px"}}/>} component={<NavLink to="/page2" />}></MenuItem>
    <MenuItem style={customstyles} icon={<AccountBoxIcon style={{height:"20px",width:"20px"}}/>} component={<NavLink to="/page3" />}></MenuItem>
    </div>
    <div style={{height:"10px"}}></div>
  </Menu>
</Sidebar>
  )
}

export default SideNavigationBar
