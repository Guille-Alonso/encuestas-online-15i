import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Encuestas from './pages/Encuestas'
import HomePage from './pages/HomePage'
import ForgetPassword from './pages/Login/Forgetpassword'
import LoginPage from './pages/Login/LoginPage'
import { RegisterPage } from './pages/RegisterPage'


function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='Login' element ={<LoginPage/>} />
        <Route path = "/ForgetPassword" element ={<ForgetPassword/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/Encuestas' element={<Encuestas/>} />
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
