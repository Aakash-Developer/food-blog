import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Fooddetails() {
  const foodImage = "https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="
const {id} = useParams()
const navigate = useNavigate()
  return (
    <div className='container my-5'>
    <div className='card border-0 shadow'>
    <div className='card-body'>
    <div className='row'>
    <div className='col-12 col-md-6'>
    <div className='FoodImage'>
    <img src={foodImage} alt="" className='card-img w-100' />
    </div>
    </div>
    <div className='col-12 col-md-6'>
    <div className='FoodDetails'>
    <h2 className='card-title fs-2 fw-bold mb-3 text-uppercase'>Spaghetti Bolognese {id}</h2>
    <p className='card-text fs-5'><span className='fw-bold text-success'>Description :</span> Classic Italian pasta dish with rich meat sauce.</p>
    <h5 className='fw-bold text-success card-title'>Ingredients :</h5>
    <ul className='list-group list-group-flush'>
    <li className='list-group-item'>300g spaghetti</li>
    <li className='list-group-item'>500g ground beef</li>
    <li className='list-group-item'>1 onion, diced</li>
    <li className='list-group-item'>2 cloves garlic, minced</li>
    <li className='list-group-item'>400g canned tomatoes</li>
    <li className='list-group-item'>1/2 cup beef broth</li>
    <li className='list-group-item'>1/4 cup red wine</li>
    <li className='list-group-item'>1 tsp dried oregano</li>
    <li className='list-group-item'>1/2 tsp dried basil</li>
    <li className='list-group-item'>Salt and pepper to taste</li>
    <li className='list-group-item'>Grated Parmesan cheese for garnish</li>
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
