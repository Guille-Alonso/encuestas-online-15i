import  Content  from "../Content.jsx";
import { Box } from "../Box.jsx";
export const LayoutHome = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
   
  </Box>
);