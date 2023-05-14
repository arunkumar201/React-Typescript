import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import UseState from "./components/Hooks/UseState";
import UserAuth from './components/Hooks/UserAuth'
import UseReducer from './components/Hooks/UseReducer'
import ProductList from './components/Pagination/ProductList'
function App() {
const StudentInfo:StudentInfoType = {
  name: "Arun",
  Age: 20,
  city: "Ahmedabad",
  ZipCode: 382424,
}
  interface StudentInfoType {
    name: string;
    Age: number;
    city: string;
    ZipCode: number;
  }
  return (
    <div className="h-screen w-full">
      {/* <Intro 
      GreetMsg={"Hi I Am Arun Kumar"} 
        StudentInfo={StudentInfo}
      /> */}
      {/* <UseState/> */}
      {/* <UserAuth/> */}
      <ProductList/>
      {/* <UseReducer/> */}
      
    </div>
  )
}

export default App
