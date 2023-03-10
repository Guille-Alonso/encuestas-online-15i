
import { nanoid } from "nanoid";
import { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { toast} from "react-toastify";
import axios from "../../config/axios";

import { ADD_CATEGORY_VALUES } from "../../constants";
import useForm from "../../hook/useForm";

const AddCategoryForm = ({onClose,getCategories}) => {
    // const [values, setValues] = useState(ADD_CATEGORY_VALUES);

  const addCategory = async()=>{
    try {
    
      await axios.post('/categories',values);
      getCategories();
      toast.success('categoría creada');
    } catch (error) {
      // toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
      if(error.response.data.errors){
        toast.error(error.response.data.errors[0].msg)
      
      }else toast.error(error.message)
    }
  }
  
  const {handleChange, handleSubmit, values,setValues} = useForm(ADD_CATEGORY_VALUES,addCategory,onClose)
  return ( 
    <>
    <Form onSubmit={handleSubmit}>
    
      <Form.Group className="mb-3" controlId="NombreCategoría">
        <Form.Label>Nombre de la categoría</Form.Label>
        <Form.Control required type="text" placeholder="popular" onChange={handleChange} value={values.name} name='name' maxLength={25} minLength={4}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="EstadoCategoría">    
        <Form.Label>Estado</Form.Label>
       
       
        <Form.Check 

            onChange={handleChange} 
            type="radio"
            id="1"
            name="state"
            label="Disponible"
            value={true}
            required
          />
           <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="2"
            name="state"
            label="No Disponible"
            value={false}
            required
          />
        </Form.Group>
      
      <Button variant="success" type="submit">
        Agregar
      </Button>
    </Form>
  
</>
  );
}
 
export default AddCategoryForm;