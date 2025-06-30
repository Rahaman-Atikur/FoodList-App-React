import { use, useState } from "react"
import Meal from "./meal";
export default function Meals({ promiseFromApi }) {
    // console.log(promiseFromApi);
    const [orderedFood, setOrderedFoods] = useState([]);

    const handleOrderedItems = (meal) => {
        console.log("ordered items clicked", meal);
        const newOrderedItems = [...orderedFood,meal];
        setOrderedFoods(newOrderedItems);
    }
    const foods = use(promiseFromApi);
    console.log(foods);
    return (
        <div>
            <h1>MyArray length:{foods.meals.length}</h1>
            <h2>How Many times Ordered: {orderedFood.length}</h2>
            {
                foods.meals.map(meal => <Meal
                    handleOrderedItems={handleOrderedItems}
                    key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    )
}