import './App.css'
import "tailwindcss";
import Meals from './Components/meals';
import { Suspense } from 'react';
const promiseFromApi = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then((res) => res.json());

function App() {
  return (
    <>
      
      <Suspense fallback={<h3>Loading...</h3>}>
        <Meals promiseFromApi={promiseFromApi}></Meals>
      </Suspense>

    </>
  )
}
export default App
