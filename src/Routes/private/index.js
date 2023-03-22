import { Navigate, Outlet } from "react-router-dom";
import { URL } from "../../components/Config";

const PrivateRoutes = ({ authenticate }) => {
  return authenticate ? <Outlet /> : <Navigate to={URL.LOGIN.BASE} />;
};

export default PrivateRoutes;
