import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useForm = (initialValues, submit, onClose, goToAdmin,validations) => {
  
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
  if(e.target.type=="checkbox"){
    let aux=[]
    if(values[e.target.name]?.length>0){
      aux = values[e.target.name]
     }
    if(e.target.checked){
    
    setValues({
      ...values,
      [e.target.name]: [...aux,e.target.value]
    });
  }else {
    const arrFilter = aux.filter(r=>r!==e.target.value)
    setValues({
      ...values,
      [e.target.name]: arrFilter,
    });
  }

  }else{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
 
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
   
    if (validations) {
     
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmitting(true);
 
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        submit(values?? values);
          if(goToAdmin){
          goToAdmin()
          }else if(onClose!=null){
            onClose()
          }
      }
      setSubmitting(false);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, setValues, errors };
};

export default useForm;