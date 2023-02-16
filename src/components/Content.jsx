import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box";
import ButtonEncuesta from "./ui/Home/botonAgregarEncuesta/ButtonEncuesta";
import GridCardContainer from "./ui/Home/container/GridCardContainer";

export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <Text className="text-center" h1>Bienvenidos a Encuestas Online</Text>
    <Text size="$lg">
        <ButtonEncuesta></ButtonEncuesta>
        <GridCardContainer></GridCardContainer>

    </Text>
    
  </Box>
);
