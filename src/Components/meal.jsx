export default function Meal({ meal }) {
    console.log(meal);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={meal.strMealThumb}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{meal.strMeal}</h2>
                    <p>{meal.strInstructions}</p>
                    <tbody className="table table-pin-rows bg-sky-300">
                        <tr><td>{meal.strMeasure1}</td></tr>
                        <tr><td>{meal.strMeasure2}</td></tr>
                        <tr><td>{meal.strMeasure3}</td></tr>
                        <tr><td>{meal.strMeasure4}</td></tr>
                        <tr><td>{meal.strMeasure5}</td></tr>
                    </tbody>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}