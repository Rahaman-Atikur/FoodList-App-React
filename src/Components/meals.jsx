import { use } from "react"

export default function Meals({promiseFromApi}){
    // console.log(promiseFromApi);
    const [value] = use(promiseFromApi);
    console.log(value);
    return(
        <div>
            <h2>OKK</h2>
        </div>
    )
}