import { configureStore } from "@reduxjs/toolkit";
import FoodDataReducer from './FoodDataSlice';

const Store = configureStore({
    reducer:{
        foodData: FoodDataReducer,
    },
})

export default Store;