import React, { useState } from "react";
import "../styles/quotation.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import ButtonComponent from "../components/button/ButtonComponent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import Primary from "../components/pricingTable/Primary";
import Secondary from "../components/pricingTable/Secondary";
import OneTimeCharges from "../components/pricingTable/OneTimeCharges";
import Refundables from "../components/pricingTable/Refundables";
import InventoryItems from "../components/pricingTable/InventoryItems";
import ParkingSlot from "../components/pricingTable/ParkingSlot";
import PoolIcon from '@mui/icons-material/Pool';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "484px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  marginBottom: "10px",
};

const Quotation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [amenityModalOpen, setAmenityModalOpen] = useState(false);
  const [componentOpen, setComponentOpen] = useState(true);
  const [selectedPricingId, setSelectedPricingId] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePricingOpen = () => {
    setPriceModalOpen(true);
  };

  const handleAmenityOpen = () => {
    setAmenityModalOpen(true);
  };

  const handlePricingSelection = (price) => {
    setComponentOpen(false);
    setSelectedPricingId(price.id);
  };

  const handlePricingDeSelection = () => {
    setComponentOpen(true);
    setSelectedPricingId(null);
  };

  const handleClosingPriceModal = () => {
    setPriceModalOpen(false);
    setComponentOpen(true);
    setSelectedPricingId(null);
  };

  const handleClosingAmenityModal = () => {
    setAmenityModalOpen(false);
  };

  const options = [
    { name: "Add Contact" },
    { name: "Lead Details" },
    { name: "Preview And Create Lead" },
    { name: "Quotation Details" },
    { name: "Preview And Create" },
  ];
  const units = [
    {
      name: "Jumeirah Estate",
      path: "/unit.jpg",
      place: "Jumeirah Golf Estate",
      price: 900,
      square_feet: 5000,
      bathroom: 2,
      bedroom: 2,
      bhk: 2,
    },
    {
      name: "Jumeirah Estate",
      path: "/unit.jpg",
      place: "Jumeirah Golf Estate",
      price: 900,
      square_feet: 5000,
      bathroom: 2,
      bedroom: 2,
      bhk: 2,
    },
    {
      name: "Jumeirah Estate",
      path: "/unit.jpg",
      place: "Jumeirah Golf Estate",
      price: 900,
      square_feet: 5000,
      bathroom: 2,
      bedroom: 2,
      bhk: 2,
    },
    {
      name: "Jumeirah Estate",
      path: "/unit.jpg",
      place: "Jumeirah Golf Estate",
      price: 900,
      square_feet: 5000,
      bathroom: 2,
      bedroom: 2,
      bhk: 2,
    },
    {
      name: "Jumeirah Estate",
      path: "/unit.jpg",
      place: "Jumeirah Golf Estate",
      price: 900,
      square_feet: 5000,
      bathroom: 2,
      bedroom: 2,
      bhk: 2,
    },
  ];

  const pricing_components = [
    {
      id: 1,
      name: "Primary",
      textColor: "#B3776D",
      bgColor: "#FEEAEA80",
    },
    {
      id: 2,
      name: "Secondary",
      textColor: "#896DB3",
      bgColor: "#EDE4FE80",
    },
    {
      id: 3,
      name: "One Time Charges",
      textColor: "#6DAFB3",
      bgColor: "#DBF0F180",
    },
    {
      id: 4,
      name: "Refundables",
      textColor: "#6D80B3",
      bgColor: "#E4EDFF80",
    },
    {
      id: 5,
      name: "Inventory Item",
      textColor: "#B3A16D",
      bgColor: "#FFFAD880",
    },
    {
      id: 6,
      name: "Parking Slot",
      textColor: "#B3776D",
      bgColor: "#FEEAEA80",
    },
  ];

  return (
    <div className="qtMainContent">
      <div className="topDivTitle">
        <div className="QuotationTopFirst">
          <div>
            <KeyboardArrowLeftIcon
              style={{ backgroundColor: "#E4E8EE", borderRadius: "50%" }}
            />
          </div>
          <div className="text">Create Quotation To Existing Lead</div>
        </div>
        <div className="QuotationTopSecond">
          <div className="text">Casagrand</div>
          <div>
            <KeyboardArrowDownIcon
              style={{ width: "24px", marginBottom: "2px", color: "#071741" }}
            />
          </div>
        </div>
      </div>
      <div className="WorkingDiv">
        <div className="workingTopNav">
          {options.map((option, index) => (
            <div
              className="optionDivTop"
              style={{ paddingLeft: index === 0 ? "24px" : "3px" }}
            >
              <div
                className="NumberDiv"
                style={{
                  display: index === 4 ? null : "none",
                  marginRight: "5px",
                }}
              >
                <div className="number">4</div>
              </div>
              <div>{option.name}</div>
              <div style={{ display: index === 4 ? "none" : null }}>
                <KeyboardArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div className="LeadDetailDiv">
            <div className="leadTitle">Lead Details</div>
            <div className="profileCardDiv">
              <div>
                <img src="/vendor2.jpg" alt="" width={"40px"} height={"40px"} />
              </div>
              <div>
                <div style={{ display: "flex", gap: "9px" }}>
                  <div className="Name">Tom Cruise</div>
                  <div className="role">Prospect</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <div className="phone">+91 9486678395</div>
                  <div>
                    <FiberManualRecordIcon
                      style={{
                        color: "#CED3DD",
                        height: "12px",
                        width: "12px",
                      }}
                    />
                  </div>
                  <div className="email">Tomcruise2515@gmail.com</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="quotationTitDiv">Quotation Details</div>
            <div style={{ display: "flex", gap: "50px" }}>
              <div>
                <div className="dateTitles">LEASE START DATE</div>
                <div className="date">30 Jan 22</div>
              </div>
              <div>
                <div className="dateTitles">LEASE END DATE</div>
                <div className="date">30 Jan 23</div>
              </div>
              <div>
                <div className="dateTitles">RENT START DATE</div>
                <div className="date">30 Jan 23</div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div>
                <div className="dateTitles">GRACE PERIOD</div>
                <div className="date">90 Days(Beginning)</div>
              </div>
            </div>
          </div>
          <div className="unitsDiv">
            <div className="unitTitle">Unit Details</div>
            <div className="units">
              {units.map((unit) => (
                <div className="singleUnit">
                  <div style={{ position: "relative" }}>
                    <img
                      className="unitImg"
                      src={unit.path}
                      alt=""
                      style={{
                        borderRadius: "4px",
                        width: "198px",
                        height: "100px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "white",
                        padding: "5px",
                        borderRadius: "50%",
                      }}
                    >
                      <img src="/trash.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "14px",
                      }}
                    >
                      <div className="unitTitle">{unit.name}</div>
                      <div className="unitPrice">
                        <AttachMoneyIcon style={{ height: "17px" }} />
                        {unit.price}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "3px",
                      }}
                    >
                      <div className="unitPlace">{unit.place}</div>
                      <div className="dot">
                        <FiberManualRecordIcon
                          style={{
                            color: "#CED3DD",
                            height: "10px",
                            width: "10px",
                          }}
                        />
                      </div>
                      <div className="unitSquareFeet">
                        {unit.square_feet} Sq.Ft
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <img
                            src="/bed.svg"
                            style={{
                              width: "17px",
                              height: "17px",
                              color: "#98A0AC",
                            }}
                          />
                        </div>
                        <div className="unitNumber">{unit.bedroom}</div>
                      </div>
                      <div>
                        <FiberManualRecordIcon
                          style={{
                            color: "#CED3DD",
                            height: "10px",
                            width: "10px",
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <img
                            src="/bath.svg"
                            style={{
                              width: "17px",
                              height: "17px",
                              color: "#98A0AC",
                            }}
                          />
                        </div>
                        <div className="unitNumber">{unit.bathroom}</div>
                      </div>
                      <div>
                        <FiberManualRecordIcon
                          style={{
                            color: "#CED3DD",
                            height: "10px",
                            width: "10px",
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div>
                          <img
                            src="/house.svg"
                            style={{
                              width: "17px",
                              height: "17px",
                              color: "#98A0AC",
                            }}
                          />
                        </div>
                        <div className="unitNumber">{unit.bhk}BHK</div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "3px",
                    }}
                  >
                    <div>
                      <Button
                        style={{
                          textTransform: "none",
                          font: " normal normal 600 12px/16px Nunito Sans",
                          color: "#5078E1",
                        }}
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        startIcon={
                          <AddIcon style={{ width: "17px", height: "17px" }} />
                        }
                        onClick={handleClick}
                      >
                        Customize
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        className="menuDiv"
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "right",
                          horizontal: "bottom",
                        }}
                        sx={{
                          "& .MuiPaper-root": {
                            boxShadow: "none", // Custom box shadow
                            border: "1px solid rgba(0, 0, 0, 0.2)", // Custom border
                            paddingTop: "0px",
                          },
                        }}
                      >
                        <MenuItem
                          onClick={handlePricingOpen}
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Pricing Component
                        </MenuItem>
                        <MenuItem
                          onClick={handleAmenityOpen}
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Amenities
                        </MenuItem>
                        <MenuItem
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Utilities
                        </MenuItem>
                        <MenuItem
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Discount
                        </MenuItem>
                        <MenuItem
                          sx={{
                            font: "normal normal 600 12px/16px Nunito Sans",
                          }}
                        >
                          Remove Component
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="qtFinalDiv">
            <div className="qtSummaryTit">Quotation Summary</div>
            <div className="qtAmtDiv">
              <div>
                <div
                  className="qtFinalRow"
                  style={{
                    borderBottom: "1px solid #d5d9e2",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="tit">DESCRIPTION</div>
                  <div className="tit">QTY</div>
                  <div className="tit">AMOUNT</div>
                </div>
                <div className="qtFinalRow">
                  <div className="subtit">Total Amount</div>
                  <div className="quantity">3</div>
                  <div className="FinalAmt">$ 3,600.00</div>
                </div>
                <div className="qtFinalRow">
                  <div className="subtit">Total Discount</div>
                  <div className="quantity">10%</div>
                  <div className="FinalAmt">- $ 100.00</div>
                </div>
                <hr style={{ margin: "5px" }} />
                <div className="qtFinalRow">
                  <div className="subtit">Total Refundable</div>
                  <div className="quantity">0%</div>
                  <div className="FinalAmt" style={{ width: "70px" }}>
                    $ 0
                  </div>
                </div>
                <hr style={{ margin: "5px" }} />
                <div className="qtFinalRow">
                  <div className="subtit">Total Tax</div>
                  <div className="quantity">18%</div>
                  <div className="FinalAmt">$ 648.00</div>
                </div>
                <hr style={{ margin: "5px" }} />
              </div>
              <div
                className="qtFinalRow"
                style={{
                  borderTop: "1px solid #d5d9e2",
                  paddingBottom: "10px",
                }}
              >
                <div className="FinalAmt">Quote Amount</div>
                <div className="FinalAmt">$ 4,148.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="btnMainDiv">
          <div>
            <ButtonComponent
              value={"Previous"}
              variant={"outlined"}
              borderColor={"#E4E8EE"}
              color={"#091B29"}
              font={"normal normal bold 14px/19px Nunito Sans"}
              padding={"10px 16px 10px 16px"}
            />
          </div>
          <div className="btns">
            <ButtonComponent
              value={"Cancel"}
              variant={"outlined"}
              borderColor={"#E4E8EE"}
              color={"#091B29"}
              font={"normal normal bold 14px/19px Nunito Sans"}
              padding={"10px 16px 10px 16px"}
            />
            <ButtonComponent
              value={"Create Quotation"}
              variant={"outlined"}
              borderColor={"#5078E1"}
              backgroundColor={"#5078E1"}
              color={"white"}
              font={"normal normal bold 14px/19px Nunito Sans"}
              padding={"10px 16px 10px 16px"}
            />
          </div>
        </div>
        <Modal open={priceModalOpen} onClose={handleClosingPriceModal}>
          <Box sx={style}>
            <div>
              <div className="pricingTopDiv">
                <div className="pricingTbTit">Pricing Table</div>
                <div>
                  <ClearIcon
                    onClick={handleClosingPriceModal}
                    style={{ color: "#7C8594", height: "20px", width: "20px" }}
                  />
                </div>
              </div>
              <div className="componentsDiv">
                {pricing_components.map((price) =>
                  componentOpen === true ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: price.bgColor,
                        margin: "0px 24px 12px 24px",
                        height: "70px",
                        padding: "0px 16px 0px 16px",
                        borderRadius: "6px",
                        marginBottom: price.id === 6 ? "20px" : "12px",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePricingSelection(price)}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: price.textColor,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            font: "normal normal bold 10px/14px Nunito Sans",
                            padding: "5px",
                          }}
                        >
                          0{price.id}
                        </div>
                        <div
                          style={{
                            font: "normal normal 600 14px/19px Nunito Sans",
                            color: price.textColor,
                          }}
                        >
                          {price.name}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div>
                          <img
                            src="/arrow.png"
                            style={{ width: "16px", height: "16px" }}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            src="/rightArrow.png"
                            style={{ width: "8px", height: "14px" }}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
                {selectedPricingId === 1 ? (
                  <Primary back={handlePricingDeSelection} />
                ) : selectedPricingId === 2 ? (
                  <Secondary back={handlePricingDeSelection} />
                ) : selectedPricingId === 3 ? (
                  <OneTimeCharges back={handlePricingDeSelection} />
                ) : selectedPricingId === 4 ? (
                  <Refundables back={handlePricingDeSelection} />
                ) : selectedPricingId === 5 ? (
                  <InventoryItems back={handlePricingDeSelection} />
                ) : selectedPricingId === 6 ? (
                  <ParkingSlot back={handlePricingDeSelection} />
                ) : null}
              </div>
            </div>
          </Box>
        </Modal>
        <Modal open={amenityModalOpen} onClose={handleClosingAmenityModal}>
          <Box sx={style}>
            <div>
              <div className="pricingTopDiv">
                <div className="pricingTbTit">Add Amenities</div>
                <div>
                  <ClearIcon
                    onClick={handleClosingAmenityModal}
                    style={{ color: "#7C8594", height: "20px", width: "20px" }}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Quotation;
