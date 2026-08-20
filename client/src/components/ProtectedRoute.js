import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
