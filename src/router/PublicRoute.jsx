import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  // return !logged ? children : <Navigate to="/marvel" />;

  const lastPath = localStorage.getItem("lastPath") || "/";

  return !logged ? children : <Navigate to={lastPath} replace />;
};
