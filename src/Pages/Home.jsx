import { useSelector,useDispatch } from 'react-redux'
import FoodCard from '../components/FoodCard'
import {GetFoodData} from '../Store/FoodDataSlice'
import { useEffect } from 'react'
export default function Home() {
  const {foodData,status} = useSelector((state)=>state.foodData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetFoodData())
  },[dispatch])
  return (
    <div className='container-sm mt-5'>
    <div className='row row-gap-3'>
    {
      foodData?.map((foodItem)=>(
        <div key={foodItem.id} className='col-12 col-sm-6 col-md-4 col-xl-3'>
        <FoodCard foodItem={foodItem}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}
