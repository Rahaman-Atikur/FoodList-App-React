import { use } from "react"
import Meal from "./meal";
export default function Meals({promiseFromApi}){
    // console.log(promiseFromApi);
    const foods = use(promiseFromApi);
    console.log(foods);
    return(
        <div>
           
             <h1>MyArray length:{foods.meals.length}</h1>
             {
                foods.meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal> )
             }
           
          
        </div>
    )
}