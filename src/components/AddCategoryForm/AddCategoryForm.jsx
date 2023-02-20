import { nanoid } from "nanoid";
import { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { toast} from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_CATEGORY_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const AddCategoryForm = ({onClose,getCategories}) => {
    const [values, setValues] = useState(ADD_CATEGORY_VALUES);

  const addCategory = async()=>{
    try {
      await axiosBack.post('/categories',values);
      getCategories();
      toast.info('categoría creada');
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }
  
  const {handleChange, handleSubmit, validated} = useForm(addCategory,values,setValues,onClose)
  return ( 
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idCategoría">
        <Form.Label>ID</Form.Label>
        <Form.Control required type="number" placeholder="Ingrese un id" onChange={handleChange} value={values.id} name='id'/>
      </Form.Group>
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
            value="Disponible"
            required
          />
           <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="2"
            name="state"
            label="No Disponible"
            value="No Disponible"
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