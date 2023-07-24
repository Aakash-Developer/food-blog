import { createSlice } from "@reduxjs/toolkit";

const initialState={
    foodData:[],
    status:""
}

export const foodDateSlice=createSlice({
    name:"foodData",
    initialState,
    reducers:{
        getFoodData(state,action){
            state.foodData = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {getFoodData,setStatus} = foodDateSlice.actions;
export default foodDateSlice.reducer


// Get Data

export function GetFoodData(){
    return async function FetchFoodWithThunk(dispatch){
        dispatch(setStatus("loading"))
        try{
            const res = await fetch("http://localhost:3001/fooditems");
            const data =  await res.json();
            dispatch(getFoodData(data))
            dispatch(setStatus("success"))
        }
        catch(err){
            console.log(err);
            dispatch(setStatus("faild"))
        }
    }
}