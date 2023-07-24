import { createSlice } from "@reduxjs/toolkit";

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
            const res = await fetch(`http://localhost:3001/fooditems/${id}`)
            const data =  await res.json();
            dispatch(getFoodItem(data))
            dispatch(setStatus("success"))
        }
        catch(err){
            console.log(err);
            dispatch(setStatus("faild"))
        }
    }
}