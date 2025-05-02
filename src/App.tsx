import './App.css'
import ComponentCourses from "./components/ComponentCourses/ComponentCourses.tsx";
import {coursesArray} from "./data/array.tsx";


function App() {

  return (
    <>
        <ComponentCourses courses={coursesArray}/>
    </>
  )
}

export default App
