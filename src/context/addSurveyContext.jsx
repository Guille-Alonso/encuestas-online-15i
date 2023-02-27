import { createContext, useState } from "react";


export const SurveysContext = createContext();

const SurveysProvider = ({children}) => {


    //
  const [questionsA, setQuestionsA] = useState([]);
  const [flagQuestion, setFlagQuestion] = useState(true)
  const [userRegister,setUserRegister] = useState(true)
   
  return ( 
    <SurveysContext.Provider 
    value={{
 
    questionsA,setQuestionsA,
    flagQuestion,setFlagQuestion,
    userRegister,setUserRegister
   
    }}>
      {children}
    </SurveysContext.Provider>
  );
}
 
export default SurveysProvider;