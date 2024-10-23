import React, { useEffect, useState } from "react";
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
import PoolIcon from "@mui/icons-material/Pool";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSelectedAmenities } from "../slices/QuotationSlice";

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

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "888px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  marginBottom: "10px",
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "432px",
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
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedUtilities, setSelectedUtilities] = useState([]);
  const [utilityModalOpen, setUtilityModalOpen] = useState(null);
  const [unitsData, setUnitsData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [utilitiesData, setUtilitiesData] = useState([]);
  const [unitTotalPrice, setUnitTotalPrice] = useState(null);
  const [unitDetailModalOpen, setUnitDetailModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState({});
  const dispatch = useDispatch();
  const primarybills = useSelector((s) => s.quotation.primary_prices.prices);
  const secondarybills = useSelector(
    (s) => s.quotation.secondary_prices.prices
  );
  const amenitybills = useSelector(
    (s) => s.quotation.amenities.selected_amenities
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [combinedBills, setCombinedBills] = useState([]);

  useEffect(() => {
    const combined = [...primarybills, ...secondarybills, ...amenitybills];
    setCombinedBills(combined);
  }, [primarybills, secondarybills, amenitybills]);

  const fetchunitsData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/master/units");
      if (response.status === 200) {
        setUnitsData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log("error fetching Units Data", error);
    }
  };

  const fetchAmenitiesData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/master/amenities"
      );
      if (response.status === 200) {
        setAmenitiesData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log("error fetching Amenities Data", error);
    }
  };

  const fetchUtilitiesData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/master/utilities"
      );
      if (response.status === 200) {
        setUtilitiesData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log("error fetching Utilities Data", error);
    }
  };

  const calculateUnitTotal = () => {
    primarybills.map((bills) => {
      if (bills.unit_id === selectedUnit.id) {
        setUnitTotalPrice(unitTotalPrice + bills.total);
      }
    });
  };

  useEffect(() => {
    fetchunitsData();
    fetchAmenitiesData();
    fetchUtilitiesData();
  }, []);

  useEffect(() => {
    calculateUnitTotal();
  }, [unitDetailModalOpen]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePricingOpen = (unit) => {
    setPriceModalOpen(true);
    setSelectedUnit(unit);
  };

  const handleAmenityOpen = (unit) => {
    setAmenityModalOpen(true);
    setSelectedUnit(unit);
  };

  const handleUtilityOpen = () => {
    setUtilityModalOpen(true);
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

  const handleClosingUtilityMOdal = () => {
    setUtilityModalOpen(false);
  };

  const handleCloseUnitDetailsModal = () => {
    setUnitDetailModalOpen(false);
    setSelectedUnit({});
  };

  const handleUnitDetailOpen = (unit) => {
    setUnitDetailModalOpen(true);
    console.log(unit);
    setSelectedUnit(unit);
  };

  // Handle toggle of Switch
  const handleToggleAmenity = (amenity, unit) => {
    const { id, price, name } = amenity; // destructure additional data
    const amenityExists = selectedAmenities.find(
      (item) => item.amenity_id === id
    );

    if (amenityExists) {
      // Remove the object if already selected (toggle off)
      setSelectedAmenities(
        selectedAmenities.filter((item) => item.amenity_id !== id)
      );
    } else {
      // Add new object to selectedAmenities (toggle on)
      setSelectedAmenities([
        ...selectedAmenities,
        {
          amenity_id: id,
          bill_name: name,
          free_applicable: false, // default to false
          unit_id: unit, // Add any unit or extra data here
          price: price,
          discount_percent: 0,
          discount_amount: 0,
          total:price,
        },
      ]);
    }
    console.log(selectedAmenities);
  };

  // Handle change of "Free applicability" radio button
  const handleRadioChange = (amenityId) => {
    setSelectedAmenities((prevAmenities) =>
      prevAmenities.map((item) =>
        item.amenity_id === amenityId
          ? { ...item, free_applicable: true } // Update free_applicable
          : item
      )
    );
    console.log(selectedAmenities);
  };

  const handleSelectedAmenities = () => {
    dispatch(addSelectedAmenities(selectedAmenities));
  };

  // Handle toggle of Switch
  const handleToggleUtility = (id) => {
    if (selectedUtilities.includes(id)) {
      // Remove the ID if already selected (i.e., toggle off)
      setSelectedUtilities(
        selectedAmenities.filter((utilityId) => utilityId !== id)
      );
    } else {
      // Add the ID if not selected (i.e., toggle on)
      setSelectedUtilities([...selectedUtilities, id]);
      console.log(selectedUtilities);
    }
  };

  const options = [
    { name: "Add Contact" },
    { name: "Lead Details" },
    { name: "Preview And Create Lead" },
    { name: "Quotation Details" },
    { name: "Preview And Create" },
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
              {unitsData.map((unit) => (
                <div className="singleUnit">
                  <div style={{ position: "relative" }}>
                    <img
                      className="unitImg"
                      src="/unit.jpg"
                      alt=""
                      style={{
                        borderRadius: "4px",
                        width: "198px",
                        height: "100px",
                      }}
                      onClick={() => handleUnitDetailOpen(unit)}
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
                      <div className="unitTitle">{unit.unit_name}</div>
                      <div className="unitPrice">
                        <AttachMoneyIcon style={{ height: "17px" }} />
                        {unit.square_feet}
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
                        <div className="unitNumber">{unit.bed_room_count}</div>
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
                        <div className="unitNumber">{unit.wash_room_count}</div>
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
                        <div className="unitNumber">2 BHK</div>
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
                          onClick={() => handlePricingOpen(unit)}
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Pricing Component
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleAmenityOpen(unit)}
                          sx={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                            font: "normal normal 600 12px/16px Nunito Sans",
                            marginBottom: "5px",
                          }}
                        >
                          Add Amenities
                        </MenuItem>
                        <MenuItem
                          onClick={handleUtilityOpen}
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
                  <Primary
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : selectedPricingId === 2 ? (
                  <Secondary
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : selectedPricingId === 3 ? (
                  <OneTimeCharges
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : selectedPricingId === 4 ? (
                  <Refundables
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : selectedPricingId === 5 ? (
                  <InventoryItems
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : selectedPricingId === 6 ? (
                  <ParkingSlot
                    back={handlePricingDeSelection}
                    unit={selectedUnit}
                  />
                ) : null}
              </div>
            </div>
          </Box>
        </Modal>
        <Modal open={amenityModalOpen} onClose={handleClosingAmenityModal}>
          <Box sx={style1}>
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
              <div
                className="primaryTitle"
                style={{ color: "#B3776D", backgroundColor: "#FEEAEA80" }}
              >
                <div>
                  <PoolIcon /> 05 Total Amenities
                </div>
                <div>$ 200.00</div>
              </div>
              <div
                style={{
                  margin: "24px",
                  font: "normal normal 600 14px/19px Nunito Sans",
                  color: "#98A0AC",
                }}
              >
                Available Amenities
              </div>
              <div className="amenityListDiv">
                {amenitiesData.map((amenity) => (
                  <div
                    className="amenityDiv"
                    key={amenity.id}
                    style={{ paddingBottom: "0px" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div>
                          <img
                            style={{
                              height: "44px",
                              width: "44px",
                              borderRadius: "5px",
                            }}
                            src="/amenity.jpeg"
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="amenityName">{amenity.name}</div>
                          <div className="amenityPrice">
                            <div>$ {amenity.price.toFixed(2)}</div>
                            <div>
                              <FiberManualRecordIcon
                                style={{
                                  color: "#E4E8EE",
                                  height: "12px",
                                  width: "12px",
                                }}
                              />
                            </div>
                            <div>Valid Feb 22 - 12 Feb 23</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Switch
                          checked={selectedAmenities.some(
                            (item) => item.amenity_id === amenity.id
                          )}
                          onChange={() =>
                            handleToggleAmenity(amenity, selectedUnit.id)
                          } // Updated handler
                        />
                      </div>
                    </div>
                    {selectedAmenities.some(
                      (item) => item.amenity_id === amenity.id
                    ) ? (
                      <div className="radioFreeDiv">
                        <FormControl>
                          <div className="radiobtn">
                            <FormControlLabel
                              value={"Free applicability"}
                              control={
                                <Radio
                                  sx={{
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 16, // Adjust this value to reduce the size
                                      margin: "0px !important",
                                    },
                                  }}
                                />
                              }
                              slotProps={{
                                typography: {
                                  sx: {
                                    font: "normal normal 600 12px/16px Nunito Sans",
                                  },
                                },
                              }}
                              label={"Free applicability"}
                              onChange={() => handleRadioChange(amenity.id)} // Updated handler
                            />
                          </div>
                        </FormControl>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div style={{ margin: "24px" }}>
                <ButtonComponent
                  value={"Update And Save"}
                  variant={"outlined"}
                  borderColor={"#5078E1"}
                  backgroundColor={"#5078E1"}
                  color={"white"}
                  width={"100%"}
                  font={"normal normal bold 14px/19px Nunito Sans"}
                  padding={"10px 16px 10px 16px"}
                  onClick={handleSelectedAmenities}
                />
              </div>
            </div>
          </Box>
        </Modal>
        <Modal open={utilityModalOpen} onClose={handleClosingUtilityMOdal}>
          <Box sx={style1}>
            <div>
              <div className="pricingTopDiv">
                <div className="pricingTbTit">Add Utilities</div>
                <div>
                  <ClearIcon
                    onClick={handleClosingUtilityMOdal}
                    style={{ color: "#7C8594", height: "20px", width: "20px" }}
                  />
                </div>
              </div>
              <div
                className="primaryTitle"
                style={{ color: "#6DAFB3", backgroundColor: "#DBF0F180" }}
              >
                <div>
                  <AutoAwesomeIcon /> 05 Total Utilities
                </div>
                <div>$ 200.00</div>
              </div>
              <div
                style={{
                  margin: "24px",
                  font: "normal normal 600 14px/19px Nunito Sans",
                  color: "#98A0AC",
                }}
              >
                Available Utilities
              </div>
              <div className="amenityListDiv">
                {utilitiesData.map((amenity) => (
                  <div
                    className="amenityDiv"
                    key={amenity.id}
                    style={{ paddingBottom: "0px" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div>
                          <img
                            style={{
                              height: "44px",
                              width: "44px",
                              borderRadius: "5px",
                            }}
                            src="./Utility.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="amenityName">{amenity.name}</div>
                          <div className="amenityPrice">
                            <div>$ {amenity.price.toFixed(2)}</div>
                            <div>
                              <FiberManualRecordIcon
                                style={{
                                  color: "#E4E8EE",
                                  height: "12px",
                                  width: "12px",
                                }}
                              />
                            </div>
                            <div>Valid Feb 22 - 12 Feb 23</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Switch
                          {...label}
                          checked={selectedUtilities.includes(amenity.id)} // Switch state
                          onChange={() => handleToggleUtility(amenity.id)} // Toggle handler
                        />
                      </div>
                    </div>
                    {selectedUtilities.includes(amenity.id) ? (
                      <div className="radioFreeDiv">
                        <FormControl>
                          <div className="radiobtn">
                            <FormControlLabel
                              value={"Free applicability"}
                              control={
                                <Radio
                                  sx={{
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 16, // Adjust this value to reduce the size
                                      margin: "0px !important",
                                    },
                                  }}
                                />
                              }
                              slotProps={{
                                typography: {
                                  sx: {
                                    font: "normal normal 600 12px/16px Nunito Sans",
                                  },
                                },
                              }}
                              label={"Free applicability"}
                              // onClick={() => handleRadioButtonChange(product)}
                            />
                          </div>
                        </FormControl>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div style={{ margin: "24px" }}>
                <ButtonComponent
                  value={"Update And Save"}
                  variant={"outlined"}
                  borderColor={"#5078E1"}
                  backgroundColor={"#5078E1"}
                  color={"white"}
                  width={"100%"}
                  font={"normal normal bold 14px/19px Nunito Sans"}
                  padding={"10px 16px 10px 16px"}
                />
              </div>
            </div>
          </Box>
        </Modal>
        <Modal open={unitDetailModalOpen} onClose={handleCloseUnitDetailsModal}>
          <Box sx={style2}>
            <div>
              <div className="pricingTopDiv">
                <div className="pricingTbTit">Add Discount to Unit</div>
                <div>
                  <ClearIcon
                    onClick={handleCloseUnitDetailsModal}
                    style={{ color: "#7C8594", height: "20px", width: "20px" }}
                  />
                </div>
              </div>
              <div className="unitImgAndDiscriptionDiv">
                <div>
                  <div className="unitImgDiv">
                    <div>
                      <img
                        src="/unit1.jpeg"
                        width={"205px"}
                        height={"168px"}
                        style={{ borderRadius: "5px" }}
                        alt=""
                      />
                    </div>
                    <div className="subImagesDiv">
                      <img
                        src="/u1.jpeg"
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        style={{ borderRadius: "5px" }}
                      />
                      <img
                        src="/u2.jpeg"
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        style={{ borderRadius: "5px" }}
                      />
                      <img
                        src="/u3.jpeg"
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        style={{ borderRadius: "5px" }}
                      />
                      <img
                        src="/u4.jpeg"
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "20px 0px 8px 0px",
                    }}
                  >
                    <div className="unitDetailsTitle">
                      {selectedUnit.unit_name}
                    </div>
                    <div className="unitId">UNIT-1234</div>
                  </div>
                  <div
                    style={{
                      font: "normal normal normal 14px/19px Nunito Sans",
                      color: "#4E5A6B",
                    }}
                  >
                    {selectedUnit.place}
                  </div>
                </div>
                <div className="unitPricingDetailsDiv">
                  <div>
                    <div className="t1">UNIT PRICING DETAILS</div>
                    {combinedBills.map((bills) => (
                      <div>
                        <div className="billMainDiv">
                          <div className="billTitlePrice">
                            <div>{bills.bill_name}</div>
                            <div>$ {bills.total}</div>
                          </div>
                          <div
                            className="billDiscountDiv"
                            style={{
                              display:
                                bills.discount_percent === 0 ? "none" : null,
                            }}
                          >
                            <div>Discount</div>
                            <div>{bills.discount_percent} %</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="billsFinalPriceInfo">
                    <div>Final Total</div>
                    <div>$ 1,200</div>
                  </div>
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
