import { Text, Spacer } from "@nextui-org/react";
import { useContext } from "react";
import { SurveysContext } from "../context/addSurveyContext";
import ButtonEncuesta from "./ui/Home/botonAgregarEncuesta/ButtonEncuesta";
import GridCardContainer from "./ui/Home/container/GridCardContainer";



const Content = () => {
  const { authenticated } = useContext(SurveysContext);
  return (  
    <div>
      <Text className="text-center" h1>
        Bienvenidos a Encuestas Online
      </Text>
      <Text size="$lg">
        {
          authenticated && <ButtonEncuesta></ButtonEncuesta>
        }
    
        
        
        <br />
        <GridCardContainer></GridCardContainer>
      </Text>
    </div>);
}
 
export default Content;
