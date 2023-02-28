import { Content } from "../Content.jsx";
import { Box } from "../Box.jsx";
export const LayoutHome = ({ children ,contenido}) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    {contenido}
  </Box>
);