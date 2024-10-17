import React from "react";
import "../styles/topbar.css";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopNavigationBar = () => {
  return (
    <div className="topNavMainDiv">
      <div className="logAndTextDiv">
        <div className="logoDiv">
          <img src="/logo.png" alt="" height={"22px"} width={"116px"} />
        </div>
        <div className="textProperty">PROPERTY MANAGEMENT SOLUTION</div>
      </div>
      <div>
        <TextField
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start"><SearchIcon style={{color:"#98a0ac"}}/></InputAdornment>
              )
            },
          }}
          sx={{
            width:"350px",
            background: "#5D5D5D 0% 0% no-repeat padding-box",
            borderRadius: "4px",
            color:"white",
            outline:"none"
          }}
          placeholder="Search"
          variant="outlined"
        />
      </div>
      <div style={{display:"flex"}}>
        <div className="NotifyDiv">
          <NotificationsNoneIcon className="notifyIcon"/>
        </div>
        <div style={{display:"flex"}}>
          <div><img style={{borderRadius:"50%"}} src="/user.jpg" alt="" height={"32px"} width={"32px"}/></div>
          <div style={{marginLeft:"8px"}}>
            <div className="userName">Bala Ganesh</div>
            <div className="userRole">Super Admin</div>
          </div>
          <div style={{marginLeft:"16.5px",marginRight:"16px"}}>
            <KeyboardArrowDownIcon style={{color:"white"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
