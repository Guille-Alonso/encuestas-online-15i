import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import { Layout } from "./components/LayoutHome/LayoutHome";*/
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
