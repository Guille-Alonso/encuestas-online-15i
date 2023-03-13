import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { SurveysContext } from "../context/addSurveyContext";

const PrivateRoute = ({ children }) => {
  const { getAuth, authenticated, loading } = useContext(SurveysContext);

  useEffect(() => {
    getAuth();
  }, []);

  return loading ? (
    <Spinner />
  ) : authenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
