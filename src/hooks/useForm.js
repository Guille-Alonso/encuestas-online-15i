import { useState } from "react";
import { toast } from "react-toastify";

const useForm = (initialValues, submit, onClose, goToAdmin) => {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return { handleChange, handleSubmit, validated, values, setValues };
};

export default useForm;
