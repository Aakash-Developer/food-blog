import React from 'react'
import { useNavigate } from 'react-router-dom'
// import FoodImg from '../usex.png'

export default function FoodCard({foodItem}) {
  const navigate = useNavigate()
  return (
    <div className='card border-0 shadow'>
    <div className='card-body d-flex flex-column' >
    <img src={foodItem.image_thum} alt="" className='rounded justify-self-center' />
    <h5 className='card-title mt-2'>{foodItem.name}</h5>
    <p>{foodItem.description.slice(0,50)+"..."}</p>
    <button className='details btn btn-warning' onClick={()=>{
      navigate(`/food-details/${foodItem.id}`)
    }}>Food Details</button>
    </div>
    </div>
  )
}
