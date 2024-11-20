import Login from "./auth/Login"
import Signup from "./auth/Signup"
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container 
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{maxWidth:'400px'}}>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
      </Routes>  
    </div>    
    </Container>
  )
}

export default App
