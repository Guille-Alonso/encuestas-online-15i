import { useState } from "react";

const useForm = (submit,values, setValores) => {

  const handleChange = (e)=>{
    setValores({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    submit();
  }

  return {handleChange, handleSubmit}
}
 
export default useForm;