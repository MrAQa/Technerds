import React from "react"
import { Routes, Route } from "react-router-dom"
import SinglePage from "./components/SinglePage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <SinglePage/> } />
      </Routes>
    </div>
  )
}

export default App