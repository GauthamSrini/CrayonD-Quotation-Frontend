import React, { useState,useEffect } from "react";
import "../../styles/pricing_component.css";
import ButtonComponent from "../button/ButtonComponent";
import Select from "react-select";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPrimaryPrice } from "../../slices/QuotationSlice";

const Primary = (props) => {
  const [selectedRevenueType, setSelectedRevenueType] = useState(1);
  const [selectedComponentBasedOn, setSelectedComponentBasedOn] = useState(1);
  const [selectedPricingComponent, setSelectedPricingComponent] = useState(null)
  const [selectedTaxGroups,setSelectedTaxGroups] = useState(null)
  const [uomValue,setUomValue] = useState(null)
  const [revenueTypesData,setRevenueTypesData] = useState([]);
  const [pricingComponentData,setPrcingComponentData] = useState([])
  const [taxGroupsData,setTaxGroupsData] = useState([])
  const dispatch = useDispatch()

  const fetchrevenueTyeps = async () => {
    try{
        const response = await axios.get('http://localhost:8081/master/revenueTypes')
        if(response.status === 200){
            setRevenueTypesData(response.data)
        }
    }
    catch(error){
        console.log("Error fetching revenue types",error)
    }
  }

  const fetchPricingComponent = async () => {
    try{
        const response = await axios.get('http://localhost:8081/master/pricingComponent')
        if(response.status === 200){
            setPrcingComponentData(response.data)
        }
    }
    catch(error){
        console.log("Error fetching pricing Compoennts",error)
    }
  }

  const fetchTaxGroups = async () => {
    try{
        const response = await axios.get('http://localhost:8081/master/taxGroups')
        if(response.status === 200){
            setTaxGroupsData(response.data)
        }
    }
    catch(error){
        console.log("Error fetching Tax Groups",error)
    }
  }
  

  useEffect(() => {
    fetchrevenueTyeps()
    fetchPricingComponent()
    fetchTaxGroups()
  }, [])

  const PricingList = pricingComponentData.map((price) => ({
    value: price.id,
    label: price.name,
  }));

  const TaxList = taxGroupsData.map((tax) => ({
    value: tax.id,
    label: tax.name,
  }));

  const handlePricingComponent = (selectedOption) => {
    setSelectedPricingComponent(selectedOption.value)
  }

  const handleTaxGroups = (selectedOption) => {
    setSelectedTaxGroups(selectedOption.value)
  }

  const handleCreatePrimaryComponent = () => {
    dispatch(addPrimaryPrice({
        bill_name:"Primary Pricing",
        revenue_id:selectedRevenueType,
        tax_group_id:selectedTaxGroups,
        pricing_component_id:selectedPricingComponent,
        unit_id:props.unit.id,
        price:uomValue,
        discount_percent:0,
        discount_amount:0,
        total:uomValue
    }))
    console.log("dispatch called");
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      font:'normal normal 600 14px/19px Nunito Sans'
    }),
    singleValue: (provided) => ({
      ...provided,
      font:'normal normal 600 14px/19px Nunito Sans'
    }),
    option: (provided, state) => ({
      ...provided,
      font:'normal normal 600 14px/19px Nunito Sans'
    }),
  };

  return (
    <div>
      <div className="primaryTitle">
        <div>Primary Pricing Component</div>
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
                onClick={()=>setSelectedRevenueType(revenue.id)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="subTitPrimary">Pricing Component</div>
          <div>
            <Select
              isSearchable={true}
              className="selectComponent"
              options={PricingList}
              placeholder=""
              styles={customStyles}
              onChange={(selectedOption)=>handlePricingComponent(selectedOption)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "24px",
          gap: "21px",
        }}
      >
        <div>
          <div className="subTitPrimary">Tax Group For Pricing Component</div>
          <div>
            <Select
              isSearchable={true}
              className="selectComponent2"
              options={TaxList}
              placeholder=""
              styles={customStyles}
              onChange={(selectedOption)=>handleTaxGroups(selectedOption)}
            />
          </div>
        </div>
        <div>
          <div className="subTitPrimary">Component Based On</div>
          <div style={{ display: "flex", gap: "5px" }}>
            <ButtonComponent
              value={"Amount"}
              variant={"outlined"}
              backgroundColor={selectedComponentBasedOn === 1 ? "#5078E1" : "white"}
              borderColor={selectedComponentBasedOn === 1 ? "#5078E1" : "#d5d9e2"}
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={selectedComponentBasedOn === 1 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
              onClick={()=>setSelectedComponentBasedOn(1)}
            />
            <ButtonComponent
              value={"UOM"}
              variant={"outlined"}
              backgroundColor={selectedComponentBasedOn === 2 ? "#5078E1" : "white"}
              borderColor={selectedComponentBasedOn === 2 ? "#5078E1" : "#d5d9e2"}
              font={"normal normal 600 14px/19px Nunito Sans"}
              color={selectedComponentBasedOn === 2 ? "#ffffff" : "#4E5A6B"}
              padding={"10px 9px 10px 9px"}
              onClick={()=>setSelectedComponentBasedOn(2)}
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "24px" }}>
        <div className="subTitPrimary">UOM Value</div>
        <div>
          <TextField
            size="small"
            type="number"
            sx={{ width: "100%",font:"normal normal 600 14px/19px Nunito Sans" }}
            slotProps={{
              input: {
                style:{font:"normal normal 600 14px/19px Nunito Sans"},
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
            onChange={(e)=>{setUomValue(parseInt(e.target.value)),console.log(e.target.value)}}
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
          <div className="subTitPrimary">Maximum</div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <progress
              value={100}
              max={100}
              style={{ "--progress-color": "#FF4B4B" }}
            />
          </div>
          <div className="recomValue">$ 190</div>
          <div className="subTitSqr">Sq. Yard/Monthly</div>
        </div>
        <div>
          <div className="subTitPrimary">Recommended</div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <progress
              value={65}
              max={100}
              style={{ "--progress-color": "#5AC782" }}
            />
          </div>
          <div className="recomValue">$ 120</div>
          <div className="subTitSqr">Sq. Yard/Monthly</div>
        </div>
        <div>
          <div className="subTitPrimary">Minimum</div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <progress
              value={35}
              max={100}
              style={{ "--progress-color": "#FF9340" }}
            />
          </div>
          <div className="recomValue">$ 100</div>
          <div className="subTitSqr">Sq. Yard/Monthly</div>
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
          onClick={handleCreatePrimaryComponent}
        />
      </div>
    </div>
  );
};

export default Primary;
