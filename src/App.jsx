import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Encuestas from './pages/Encuestas'
import HomePage from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'


function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/Encuestas' element={<Encuestas/>} />
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
