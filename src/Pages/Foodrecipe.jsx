import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Foodrecipe() {
  const foodImage = "https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="
  const {id} = useParams();
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
    <ul className='list-group list-group-flush list-group-numbered'>
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
    <h5 className='fw-bold text-success card-title mt-3'>Cooking instructions :</h5>
    <ul className='list-group list-group-flush list-group-numbered'>
    <li className='list-group-item'>Cook spaghetti according to package instructions.</li>
    <li className='list-group-item'>In a large skillet, brown ground beef over medium heat. Drain excess fat.</li>
    <li className='list-group-item'>Add onions and garlic to the skillet and sauté until softened.</li>
    <li className='list-group-item'>Stir in canned tomatoes, beef broth, and red wine. Add oregano, basil, salt, and pepper.</li>
    <li className='list-group-item'>Simmer for 20 minutes, stirring occasionally.</li>
    <li className='list-group-item'>Serve Bolognese sauce over cooked spaghetti. Garnish with Parmesan cheese."</li>
    </ul>
    <Link to="/" className='btn btn-warning mt-3' type='button'>Back To Home</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
