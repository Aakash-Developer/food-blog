import React,{ useEffect } from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {GetFoodData} from '../Store/GetSingleFood'
export default function Foodrecipe() {
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
    <p className='card-text fs-5'><span className='fw-bold text-success'>Description :</span> {foodItem.description }</p>
    <h5 className='fw-bold text-success card-title'>Ingredients :</h5>
    <ul className='list-group list-group-flush list-group-numbered'>
    {foodItem.ingredients?.map((ingredient)=>(
      <li key={ingredient} className='list-group-item'>{ingredient}</li>
    ))}
    </ul> 
    <h5 className='fw-bold text-success card-title mt-3'>Cooking instructions :</h5>
    <ul className='list-group list-group-flush list-group-numbered'>
    {foodItem.instructions?.map((instructions)=>(
      <li key={instructions } className='list-group-item'>{instructions }</li>
    ))}</ul>
    <Link to="/" className='btn btn-warning mt-3' type='button'>Back To Home</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
