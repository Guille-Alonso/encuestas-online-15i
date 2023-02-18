import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import ForgetPassword from './pages/Login/Forgetpassword'

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
