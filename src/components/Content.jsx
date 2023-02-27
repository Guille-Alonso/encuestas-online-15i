import { Text, Spacer } from "@nextui-org/react";
import ButtonEncuesta from "./ui/Home/botonAgregarEncuesta/ButtonEncuesta";
import GridCardContainer from "./ui/Home/container/GridCardContainer";

export const Content = () => (
  <div>
    <Text className="text-center" h1>
      Bienvenidos a Encuestas Online
    </Text>
    <Text size="$lg">
      <ButtonEncuesta></ButtonEncuesta>
      <br />
      <GridCardContainer></GridCardContainer>
    </Text>
  </div>
);
