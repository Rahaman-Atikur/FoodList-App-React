export default function Meal({meal}) {
    console.log(meal);
    return (
        <div>
            <h2>MealName:{meal.strMeal}</h2>
        </div>
    )
}