import './App.css'
import MyComponents from './components/MyComponents'
import {coursesAndDurationArray} from "./data/arrays.tsx";
function App() {

  return (
    <>
        <MyComponents arrays={coursesAndDurationArray}/>
    </>
  )
}

export default App
