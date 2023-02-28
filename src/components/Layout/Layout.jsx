import Footer from "../common/Footer/Footer";
import MainNavBar from "../common/MainNavBar/NavbarComponent";


const Layout = ({children}) => {

    return ( 
      <>
      <MainNavBar/>
        {children}
      <Footer/>
      </>
    );
  }

  export default Layout;