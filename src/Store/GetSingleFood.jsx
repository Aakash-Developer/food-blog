import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    foodItem:{},
    status:""
}

export const GetFoodItem=createSlice({
    name:"foodItem",
    initialState,
    reducers:{
        getFoodItem(state,action){
            state.foodItem = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {getFoodItem,setStatus} = GetFoodItem.actions;
export default GetFoodItem.reducer


// Get Data

export function GetFoodData(id){
    return async function FetchFoodWithThunk(dispatch){
        dispatch(setStatus("loading"))
        try{
            const res = await axios(`http://localhost:3001/fooditems/${id}`)
            dispatch(getFoodItem(res.data))
            dispatch(setStatus("success"))
        }
        catch(err){
            console.log(err);
            dispatch(setStatus("faild"))
        }
    }
}