// import { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";
// import { Navigate } from "react-router-dom";

// import { toast } from "react-toastify";
// import axios from "../../config/axios";



// const PrivateRoute = (children) => {
//   const [user, setUser]= useState (false);
//   const [loading, setLoading]=useState(true);
//   const getAuth =async () => {
//     try{
//       const token=localStorage.getItem("token");
//       if (!token) {
//         setLoading (false);
//          return setUser(false);
//       }
      
   
//       axios.defaults.headers.common ["Authorization"]=token;
//       const {data}= await axios.get ("/authStatus");
//       setUser(data.user);
     
//     }
//       catch (error){
//         toast.error ("Error de autenticacion");
//       }
//        setLoading (false);
//     };


//     useEffect (()=> {
//       getAuth();

//     }, []);
    
    
//   return loading? (<Spinner/>)  : (!!user? children: <Navigate to="/Login"/>);


  
// };
 
// export default PrivateRoute;