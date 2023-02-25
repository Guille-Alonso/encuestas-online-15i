import axiosOriginal from "axios";


 const axios= axiosOriginal.create({
    baseUrl:"http://localhost:5173/",
 });

export default axios;