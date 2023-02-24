import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import SurveysProvider from './context/addSurveyContext'
import AdminPage from './pages/AdminPage'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'

function App() {

  return (
    <Router>
      <Layout>
        <SurveysProvider>
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/categoryPage' element={<CategoryPage/>}/>
        <Route path='/surveyPage' element={<SurveyPage/>}/>
      </Routes>
      </SurveysProvider>
      </Layout>
    </Router>
  )
}

export default App
