import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import About from './pages/AboutUs'
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
        <Route path='/Login' element ={<LoginPage/>} />
        <Route path= '/Forgetpassword'element = {<ForgetPassword/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/Encuestas' element={<Encuestas/>} />
        <Route path='/AboutUs' element={<About/>} />
      </Routes>
      </Layout>
      
      <Routes> <Route path='/Home' element={<HomePage/>}/>  </Routes>
    </Router>
  )
}

export default App
