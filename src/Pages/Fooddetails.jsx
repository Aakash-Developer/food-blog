import React, { useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {GetFoodData} from '../Store/GetSingleFood'
export default function Fooddetails() {
const dispatch = useDispatch();
const {id} = useParams()
const navigate = useNavigate()
const {foodItem,status} = useSelector((state)=>state.foodItem)
 useEffect(()=>{
  dispatch(GetFoodData(id))
 },[id,dispatch])
  return (
    <div className='container my-5'>
    <div className='card border-0 shadow'>
    <div className='card-body'>
    <div className='row'>
    <div className='col-12 col-md-6'>
    <div className='FoodImage'>
    <img src={foodItem.image_thum} alt="" className='card-img w-100' />
    </div>
    </div>
    <div className='col-12 col-md-6'>
    <div className='FoodDetails'>
    <h2 className='card-title fs-2 fw-bold mb-3 text-uppercase'>{foodItem.name}</h2>
    <p className='card-text fs-5'><span className='fw-bold text-success'>Description :</span>{foodItem.description }</p>
    <h5 className='fw-bold text-success card-title'>Ingredients :</h5>
    <ul className='list-group list-group-flush'>
    {foodItem.ingredients?.map((ingredient)=>(
      <li key={ingredient} className='list-group-item'>{ingredient}</li>
    ))}
    </ul>
    <button className='btn btn-warning text-capitalize mt-3' onClick={()=>{
      navigate(`/food-recipe/${id}`)
    }}>Get food recipe Details</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
