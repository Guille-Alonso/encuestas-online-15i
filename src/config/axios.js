import axios from "axios";

export const axiosBack = axios.create({
    baseURL:"http://localhost:3008"
  });