import React, { useState, useEffect } from "react";
import ButtonComponent from "../button/ButtonComponent";
import Select from "react-select";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";

const OneTimeCharges = (props) => {
  const [selectedRevenueType, setSelectedRevenueType] = useState(1);
  const [selectedComponentBasedOn, setSelectedComponentBasedOn] = useState(1);
  const [isChargable, setIsChargable] = useState(1);
  const [revenueTypesData, setRevenueTypesData] = useState([]);
  const [pricingComponentData, setPrcingComponentData] = useState([]);
  const [taxGroupsData, setTaxGroupsData] = useState([]);

  const fetchrevenueTyeps = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/master/revenueTypes"
      );
      if (response.status === 200) {
        setRevenueTypesData(response.data);
      }
    } catch (error) {
      console.log("Error fetching revenue types", error);
    }
  };

  const fetchPricingComponent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/master/pricingComponent"
      );
      if (response.status === 200) {
        setPrcingComponentData(response.data);
      }
    } catch (error) {
      console.log("Error fetching pricing Compoennts", error);
    }
  };

  const fetchTaxGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/master/taxGroups"
      );
      if (response.status === 200) {
        setTaxGroupsData(response.data);
      }
    } catch (error) {
      console.log("Error fetching Tax Groups", error);
    }
  };

  useEffect(() => {
    fetchrevenueTyeps();
    fetchPricingComponent();
    fetchTaxGroups();
  }, []);

  const PricingList = pricingComponentData.map((price) => ({
    value: price.id,
    label: price.name,
  }));

  const TaxList = taxGroupsData.map((tax) => ({
    value: tax.id,
    label: tax.name,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      font: "normal normal 600 14px/19px Nunito Sans",
    }),
    singleValue: (provided) => ({
      ...provided,
      font: "normal normal 600 14px/19px Nunito Sans",
    }),
    option: (provided, state) => ({
      ...provided,
      font: "normal normal 600 14px/19px Nunito Sans",
    }),
  };

  return (
    <div>
      <div
        className="primaryTitle"
        style={{ color: "#6DAFB3", backgroundColor: "#DBF0F180" }}
      >
        <div>One Time Charges</div>
        <div>
          <img
            src="/arrow.png"
            style={{ width: "20px", height: "20px" }}
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "24px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="subTitPrimary">Revenue Type</div>
          <div style={{ display: "flex", gap: "5px" }}>
            {revenueTypesData.map((revenue) => (
              <ButtonComponent
                value={revenue.name}
                variant={"outlined"}
                backgroundColor={
                  revenue.id === selectedRevenueType ? "#5078E1" : "white"
                }
                borderColor={
                  revenue.id === selectedRevenueType ? "#5078E1" : "#d5d9e2"
                }
                font={"normal normal 600 14px/19px Nunito Sans"}
                color={
                  revenue.id === selectedRevenueType ? "#ffffff" : "#4E5A6B"
                }
                padding={"10px 9px 10px 9px"}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "24px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="subTitPrimary">Pricing Component</div>
          <div>
            <Select
              isSearchable={true}
              className="selectComponent"
              options={PricingList}
              placeholder=""
              styles={customStyles}
            />
          </div>
        </div>
        <div>
          <div className="subTitPrimary">Tax Group For Pricing Component</div>
          <div>
            <Select
              isSearchable={true}
              className="selectComponent2"
              options={TaxList}
              placeholder=""
              styles={customStyles}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="subTitPrimary">Chargeble</div>
          <div style={{ display: "flex", gap: "5px" }}>
            <ButtonComponent
              value={"Yes"}
              variant={"outlined"}
              backgroundColor={isChargable === 1 ? "#5078E1" : "white"}
              borderColor={isChargable === 1 ? "#5078E1" : "#d5d9e2"}
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={isChargable === 1 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
              width={"2rem"}
            />
            <ButtonComponent
              value={"No"}
              variant={"outlined"}
              backgroundColor={isChargable === 2 ? "#5078E1" : "white"}
              borderColor={isChargable === 2 ? "#5078E1" : "#d5d9e2"}
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={isChargable === 2 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
            />
          </div>
        </div>
        <div>
          <div className="subTitPrimary">Component Based On</div>
          <div style={{ display: "flex", gap: "5px" }}>
            <ButtonComponent
              value={"Amount"}
              variant={"outlined"}
              backgroundColor={
                selectedComponentBasedOn === 1 ? "#5078E1" : "white"
              }
              borderColor={
                selectedComponentBasedOn === 1 ? "#5078E1" : "#d5d9e2"
              }
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={selectedComponentBasedOn === 1 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
            />
            <ButtonComponent
              value={"UOM"}
              variant={"outlined"}
              backgroundColor={
                selectedComponentBasedOn === 2 ? "#5078E1" : "white"
              }
              borderColor={
                selectedComponentBasedOn === 2 ? "#5078E1" : "#d5d9e2"
              }
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={selectedComponentBasedOn === 2 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
            />
            <ButtonComponent
              value={"%"}
              variant={"outlined"}
              backgroundColor={
                selectedComponentBasedOn === 2 ? "#5078E1" : "white"
              }
              borderColor={
                selectedComponentBasedOn === 2 ? "#5078E1" : "#d5d9e2"
              }
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={selectedComponentBasedOn === 2 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "24px" }}>
        <div className="subTitPrimary">UOM Value</div>
        <div>
          <TextField
            size="small"
            sx={{
              width: "100%",
              font: "normal normal 600 14px/19px Nunito Sans",
            }}
            slotProps={{
              input: {
                style: { font: "normal normal 600 14px/19px Nunito Sans" },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{
                      font: "normal normal 600 14px/19px Nunito Sans",
                      color: "#98A0AC",
                    }}
                  >
                    <div>SAR/Total</div>
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
      </div>
      <div
        style={{
          margin: "24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ButtonComponent
          value={"Back"}
          variant={"outlined"}
          backgroundColor={"white"}
          borderColor={"#d5d9e2"}
          font={"normal normal 800 14px/19px Nunito Sans"}
          color={"#4E5A6B"}
          padding={"12px 24px 12px 24px"}
          onClick={props.back}
        />
        <ButtonComponent
          value={"Create Pricing Component"}
          variant={"outlined"}
          backgroundColor={"#5078E1"}
          borderColor={"#5078E1"}
          font={"normal normal 600 14px/19px Nunito Sans"}
          color={"#ffffff"}
          padding={"12px 24px 12px 24px"}
        />
      </div>
    </div>
  );
};

export default OneTimeCharges;
