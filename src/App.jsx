import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import  Content  from "./components/Surveys/Content";
import AboutUs from "./pages/AboutUs";
import {RegisterPage} from "./pages/RegisterPage";
import  LoginPage  from "./pages/Login/LoginPage";
import ForgetPassword from './pages/Login/Forgetpassword'
import SurveysProvider from "./context/addSurveyContext";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./routes/PrivateRoute";
import AdminPage from "./pages/AdminPage"
import CategoryPage from "./pages/CategoryPage";
import SurveyPage from "./pages/SurveyPage";
import AnswerSurveyPage from "./pages/AnswerSurveyPage/AnswerSurveyPage";
import AddSurveyUserPage from "./pages/AddSurveyUserPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
        <SurveysProvider>
      <Layout>
          <Routes>
          
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
            <Route path="/categoryPage" element={<PrivateRoute><CategoryPage /></PrivateRoute>} />
            <Route path="/surveyPage" element={<PrivateRoute><SurveyPage/></PrivateRoute>} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Forgetpassword" element={<ForgetPassword />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/answerSurvey/:surveyId' element={<AnswerSurveyPage/>}/>
            <Route path='/addSurveyUser' element={<PrivateRoute><AddSurveyUserPage/></PrivateRoute>}/>
            <Route path="/home" element={<Content/>} />
            <Route
              path="/*"
              element={
                
                  <LandingPage />
                
              }
            />
          </Routes>
 
        <ToastContainer />
      </Layout>
      </SurveysProvider>
    </Router>
  );
}

export default App;
