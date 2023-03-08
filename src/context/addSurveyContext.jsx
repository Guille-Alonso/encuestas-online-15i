import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "../config/axios";


export const SurveysContext = createContext();

const SurveysProvider = ({children}) => {


    //

  const [selected,setSelected] =useState(undefined);
  const [questionsA, setQuestionsA] = useState([]);
  const [flagQuestion, setFlagQuestion] = useState(true)
 

  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (values) => {
    try {
      const { data } = await axios.post("/users/login", values);
      setAuthenticated(!!data.user);
      setUser(data.user);
      localStorage.setItem("token", data.token);
    } catch (error) {
      toast.error("Ups! Hubo un error, intenta más tarde por favor");
    }
  };

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return setAuthenticated(false);
      }
      axios.defaults.headers.common["Authorization"] = token;
      const { data } = await axios.get("/users/authStatus");
      setUser(data.user);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false)
      toast.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };

   
  return ( 
    <SurveysContext.Provider 
    value={{
 
    questionsA,setQuestionsA,
    flagQuestion,setFlagQuestion,
    user,
    authenticated,
    loading,
    login,
    getAuth,
    selected,
    setSelected,
    setLoading
   
    }}>
      {children}
    </SurveysContext.Provider>
  );
}
 
export default SurveysProvider;