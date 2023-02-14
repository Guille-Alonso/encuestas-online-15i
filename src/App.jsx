import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
