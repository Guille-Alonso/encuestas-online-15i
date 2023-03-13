import  Content  from "../Surveys/Content";
import { Box } from "../Surveys/Box.jsx";
export const LayoutHome = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
   
  </Box>
);