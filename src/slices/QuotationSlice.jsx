import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quotation_details :{
        total_amount:null,
        total_discount:null,
        total_refundable:null,
        total_tax:null,
        quote_amount:null
    },
    // primary_price :[
    //     {
    //     revenue_id:null,
    //     tax_group_id:null,
    //     pricing_component_id:null,
    //     unit_id:null,
    //     price:null,
    //     discount_percent:null,
    //     discount_amount:null,
    //     total:null
    // },
    // ]
    primary_prices :{
        prices:[]
    },
    secondary_prices :{
        prices:[]
    },
    amenities : {
        selected_amenities:[]
    }
};

const quotation = createSlice({
    name:"quotation",
    initialState,
    reducers:{
        addPrimaryPrice(state,action){
            const data = action.payload
            console.log(data);
            state.primary_prices.prices.push(data)
        },
        addSecondaryPrice(state,action){
            const data = action.payload
            state.secondary_prices.prices.push(data)
        },
        addSelectedAmenities(state,action){
            const data = action.payload
            data.map((amenity)=>state.amenities.selected_amenities.push(amenity))
        }
    }
})

export const {addPrimaryPrice,addSecondaryPrice,addSelectedAmenities} = quotation.actions
export const QuotationSlice = quotation.reducer