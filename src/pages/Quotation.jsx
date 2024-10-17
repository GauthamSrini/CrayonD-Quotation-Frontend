import React from 'react'
import '../styles/quotation.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Quotation = () => {
  const options = [
    {name : "Add Contact"},
    {name : "Lead Details"},
    {name : "Preview And Create Lead"},
    {name : "Quotation Details"},
    {name : "Preview And Create"},
  ]
  return (
    <div className='qtMainContent'>
      <div className='topDivTitle'>
        <div className='QuotationTopFirst'>
          <div><KeyboardArrowLeftIcon style={{backgroundColor:"#E4E8EE",borderRadius:"50%"}}/></div>
          <div className='text'>Create Quotation To Existing Lead</div>
        </div>
        <div className='QuotationTopSecond'>
          <div className='text'>Casagrand</div>
          <div><KeyboardArrowDownIcon style={{width:"24px",marginBottom:"2px",color:"#071741"}}/></div>
        </div>
      </div>
      <div className='WorkingDiv'>
        <div className='workingTopNav'>
          {options.map((option,index)=>
          <div className='optionDivTop' style={{paddingLeft:index===0?"24px":"3px"}}>
            <div className='NumberDiv' style={{display:index===4?null:"none",marginRight:"5px"}}><div className='number'>4</div></div>
            <div>{option.name}</div>
            <div style={{display:index===4?"none":null}}><KeyboardArrowRightIcon/></div>
          </div>
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Quotation
