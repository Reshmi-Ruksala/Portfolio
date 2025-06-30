import { BrowserRouter } from "react-router-dom"



function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path = "*" index element={<NotFound />}/>
        <Route />
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
