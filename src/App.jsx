import Home from "./pages/Home"
import Form from "./pages/Form"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>  
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/form" element={<Form />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
