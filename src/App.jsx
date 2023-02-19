import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login/LoginPage'
import ForgetPassword from './pages/Login/Forgetpassword'



function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
