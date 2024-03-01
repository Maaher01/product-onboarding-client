import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
