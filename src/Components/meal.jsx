import { useState } from "react";
export default function Meal({ meal , handleOrderedItems}) {
    console.log(handleOrderedItems);
    const [order, setOrder] = useState(false);
    const handleOrder = () => {
        setOrder(!order);
        handleOrderedItems(meal);
    }
    return (
        <div className={order ? "bg-green-500" : "bg-red-600"}>
            <div className="card card-side  shadow-sm">
                <figure>
                    <img
                        src={meal.strMealThumb}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{meal.strMeal}</h2>
                    <p >{meal.strInstructions}</p>
                    <tbody className="table table-pin-rows bg-sky-300">
                        <tr><td>{meal.strMeasure1}</td></tr>
                        <tr><td>{meal.strMeasure2}</td></tr>
                        <tr><td>{meal.strMeasure3}</td></tr>
                        <tr><td>{meal.strMeasure4}</td></tr>
                        <tr><td>{meal.strMeasure5}</td></tr>
                    </tbody>
                    <div className="card-actions justify-end">
                        <button onClick={handleOrder} className="btn btn-primary">{
                            order ? "Ordered" : "Not selected"
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}