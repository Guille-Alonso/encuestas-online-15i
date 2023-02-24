import { useState } from "react";
import { toast } from "react-toastify";

const useForm = (initialValues,submit,onClose,goToAdmin) => {

  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);
 
  const handleChange = (e)=>{
  
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
 
  }

  const handleSubmit = (event) => {
    if(values.name.length >25){
      event.preventDefault();
      toast.error("no puedes ingresar un nombre tan largo")
      return;
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    
     
    }
    setValidated(true);

    if(form.checkValidity()){
      event.preventDefault();
     submit();
     if(goToAdmin) goToAdmin()
      else onClose();
    }
  };


  return {handleChange, handleSubmit,validated,values,setValues}
}
 
export default useForm;