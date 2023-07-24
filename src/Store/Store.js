import { configureStore } from "@reduxjs/toolkit";
import FoodDataReducer from './FoodDataSlice';
import FoodItemReducer from './GetSingleFood.jsx'

const Store = configureStore({
    reducer:{
        foodData: FoodDataReducer,
        foodItem: FoodItemReducer,
    },
})

export default Store;