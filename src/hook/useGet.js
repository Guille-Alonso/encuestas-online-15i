import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGet = (url, axios, selected)=>{
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getData = async()=>{
    try {
      const {data} = await axios.get(url);
    
      let aux =[]
      if(url == '/surveys'){
        
        for (let index = 0; index < data.surveys.length; index++) {
        
          let {pregunta, ...res} = data.surveys[index];
    
          aux.push(res)
        }
  
      }else if(url == '/surveys/'+selected){
       
       let {pregunta,...resto} = data.survey;
       for (let index = 0; index < pregunta.length; index++) {
      
        let {responses, ...res} = pregunta[index];
        aux.push(res)
      }
      
      }else aux = data
      
      setState(data.categories || aux);
      setLoading(false);
    } catch (error) {
      toast.error("Error en la conexión")
    }
  }

  useEffect(()=>{
    getData();
  },[])
  return [state, loading, getData, setState]
}

export default useGet;
