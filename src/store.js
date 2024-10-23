import { configureStore } from "@reduxjs/toolkit";
import { QuotationSlice } from "./slices/QuotationSlice";

export const store = configureStore({
    reducer:{
        quotation:QuotationSlice
    }
})