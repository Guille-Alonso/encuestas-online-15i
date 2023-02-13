import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import HomePage from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import LoginPage from './pages/Login/LoginPage'

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
