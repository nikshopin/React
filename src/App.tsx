import './App.css'
import {coursesTitleArray} from "./data/arrays.tsx";
import MyComponents from './components/MyComponents'
function App() {

  return (
    <>
        <MyComponents arrayCourses={ coursesTitleArray}/>
    </>
  )
}

export default App
