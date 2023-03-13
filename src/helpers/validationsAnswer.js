export const validationAnswer = (values) => {
 
    let errors = {};
    if (!values.email) {
      errors.email = "El email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "El email no es válido";
    } else if (values.email.length > 30) {
      errors.email = "El email no debe poseer más de 30 caracteres";
    }
  
    return errors;
  };