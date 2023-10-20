import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import Page1  from "./Pages/default1"
import  Page2 from "./Pages/pg2"

function App(){
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Page1 />} />
    <Route path="/vejamais" element={<Page2 />} />
  </Routes>
)

export default App;
