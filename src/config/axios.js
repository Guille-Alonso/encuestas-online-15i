import axiosOriginal from "axios";
import { resolveBaseUrl } from "vite";

 const axios= axiosOriginal.create({
    baseUrl:"http://localhost:5173/",
 });

export default axios;