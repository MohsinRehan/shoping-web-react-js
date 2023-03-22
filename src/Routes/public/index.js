import { Navigate, Outlet } from "react-router-dom";
import { URL } from "../../components/Config";

const PublicRoutes = ({ authenticate }) => {
  return authenticate ? <Navigate to={URL.ADMINDASHBOARD.BASE} /> : <Outlet />;
};

export default PublicRoutes;
