import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login/LoginPage'
import ForgetPassword from './pages/Login/Forgetpassword'
import { RegisterPage } from './pages/RegisterPage'


function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
