import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login/LoginPage'
import ForgetPassword from './pages/Login/Forgetpassword'
import { Link, useLocation } from "react-router-dom";

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
