import { useState } from "react";
import { toast } from "react-toastify";

const useForm = (submit,values, setValores,onClose,goToAdmin) => {

  const [validated, setValidated] = useState(false);

  const handleChange = (e)=>{
  
    setValores({
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


  return {handleChange, handleSubmit,validated}
}
 
export default useForm;