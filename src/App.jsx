import './App.css'
import "tailwindcss";
import Meals from './Components/meals';
const promiseFromApi = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then(res=>res.json());

function App() {
  return (
    <>
      <h1 className='bg-red-400'>Vite + React</h1>
      <Meals promiseFromApi={promiseFromApi}></Meals>
    </>
  )
}
export default App
