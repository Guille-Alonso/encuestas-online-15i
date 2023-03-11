
import { useEffect, useState } from "react";
import { Button, Form,Alert} from "react-bootstrap";
import { toast} from "react-toastify";
import axios from "../../config/axios";
import { ADD_CATEGORY_VALUES,ERROR_MESSAGE } from "../../constants";
import useForm from "../../hook/useForm";
import { validationNames } from "../../helpers/validationsNames";

const EditCategoryForm = ({onClose,selected,getCategories,setSelected}) => {

    const editCategory = async()=>{
        try {
          const obj = {
            "id":values._id,
            "campos":values
        }

          await axios.put('/categories',obj);
          getCategories();
          toast.info('categoría editada');
          setSelected(undefined)
        } catch (error) {
          // toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
          if(error.response.data.errors){
            toast.error(error.response.data.errors[0].msg)
          
          }else toast.error(error)
        }
      }

      const {handleChange, handleSubmit, values, setValues,errors} = useForm(ADD_CATEGORY_VALUES,editCategory,onClose,null,validationNames)
  
      const getCategoryInfo = async ()=>{
        try {
          const {data} = await axios.get('/categories/'+selected);
          
          setValues(data.category)
        
          
        } catch (error) {
          toast.error(ERROR_MESSAGE)
        }
      }
      
      useEffect(()=>{
        getCategoryInfo()
      },[])

    
  
    return ( 
      <>
      <Form  onSubmit={handleSubmit}>
      
        <Form.Group className="mb-3" controlId="NombreCategoría">
          <Form.Label>Nombre de la categoría</Form.Label>
          <Form.Control required type="text" onChange={handleChange} value={values.name} name='name' maxLength={25} minLength={4}/>
          {Object.keys(errors).length !== 0 &&
          Object.values(errors).map((error, index) => (
            <Alert variant="danger" className="mt-3" key={index}>
              {error}
            </Alert>
          ))}
        </Form.Group>
          <Form.Group className="mb-3" controlId="EstadoCategoría">    
          <Form.Label>Estado</Form.Label>
          <Form.Select onChange={handleChange} value={values.state} name="state">
          <option value={true}>Activa</option>
          <option value={false}>Inactiva</option>
          </Form.Select>
          </Form.Group>
        
        <Button variant="success" type="submit">
          Editar
        </Button>
      </Form>
    
  </>
    );
}
 
export default EditCategoryForm;