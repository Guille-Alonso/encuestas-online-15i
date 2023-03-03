
import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { toast} from "react-toastify";
import axios from "../../config/axios";
import { ADD_CATEGORY_VALUES,ERROR_MESSAGE } from "../../constants";
import useForm from "../../hook/useForm";

const EditCategoryForm = ({onClose,selected,getCategories,setSelected}) => {
    // const [values, setValues] = useState(ADD_CATEGORY_VALUES);

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
          toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
        }
      }

      const {handleChange, handleSubmit, values, setValues} = useForm(ADD_CATEGORY_VALUES,editCategory,onClose)
  
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
        {/* <Form.Group className="mb-3" controlId="idCategoría">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" onChange={handleChange} value={values.id} name='id'/>
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="NombreCategoría">
          <Form.Label>Nombre de la categoría</Form.Label>
          <Form.Control required type="text" onChange={handleChange} value={values.name} name='name' maxLength={25} minLength={4}/>
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