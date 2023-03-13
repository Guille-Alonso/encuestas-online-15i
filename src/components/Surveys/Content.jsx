import { Text, Spacer } from "@nextui-org/react";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import axios from "../../config/axios";
import { SurveysContext } from "../../context/addSurveyContext";
import useGet from "../../hook/useGet";
import ButtonEncuesta from "../ui/Home/botonAgregarEncuesta/ButtonEncuesta";
import GridCardContainer from "../ui/Home/container/GridCardContainer";
import "./Content.css"

const Content = () => {
  const { authenticated } = useContext(SurveysContext);
  const [categories, loading] = useGet('/categories',axios);
  const [selected,setSelected] = useState('')

const categorySelected = (e)=>{
setSelected(e.target.value)
}

  return (  
    <div className="contentHeight">
      <Text className="text-center" h1>
        Bienvenidos a Encuestas Online
      </Text>
      <Text size="$lg">
        {
          authenticated && <ButtonEncuesta></ButtonEncuesta>
        }
    <div className="d-flex justify-content-center my-4">
    <select onChange={categorySelected} value={selected} className="selectedFilter">
    <option value=''>Categorías</option>
                {loading?
                <Spinner/>
                :
                categories.map((item) => 
                {
                  if(item.state){
                  return <option key={nanoid()} value={item.name}>{item.name}</option>
                  }
                }
                  
                )}
    </select>
    </div>
     
        <GridCardContainer filter={selected}></GridCardContainer>
      </Text>
    </div>);
}
 
export default Content;
