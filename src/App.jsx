import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import { Content } from "./components/Content";
/*import { Layout } from "./components/LayoutHome/LayoutHome";*/
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import {RegisterPage} from "./pages/RegisterPage";
import  LoginPage  from "./pages/Login/LoginPage";
import ForgetPassword from './pages/Login/Forgetpassword'

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact"element={<Contact/>} /> 
        <Route path='/Login' element ={<LoginPage/>} />
        <Route path= '/Forgetpassword'element = {<ForgetPassword/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        {/* <Route path='/Encuestas' element={<Encuestas/>} /> */}

      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
