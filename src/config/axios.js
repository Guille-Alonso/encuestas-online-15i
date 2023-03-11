import axiosOriginal from "axios";


const axios = axiosOriginal.create({
  //  baseURL: "http://localhost:4000",
  baseURL: import.meta.env.VITE_APP_URL_BACK
 });
 

export default axios;