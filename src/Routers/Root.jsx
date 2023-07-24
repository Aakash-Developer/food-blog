import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Fooddetails from "../Pages/Fooddetails";
import Foodrecipe from "../Pages/Foodrecipe";
import MainLayout from "../Layouts/MainLayout";
const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="food-details/:id" element={<Fooddetails/>}/>
        <Route path="food-recipe/:id" element={<Foodrecipe/>}/>
        </Route>
    )
)

const RouterRoot =()=>{
    return(
        <RouterProvider router={Router}/>
    )
}
export default RouterRoot;