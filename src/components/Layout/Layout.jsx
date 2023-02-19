import MainNavBar from "../common/MainNavBar/MainNavBar";

const Layout = ({children}) => {

    return ( 
      <>
      <MainNavBar/>
        {children}
      
      </>
    );
  }
   
  export default Layout;