import { Link } from "react-router-dom";
import "./Sidebar.css";
import { Box } from "react-bootstrap-icons";
import { BoxArrowLeft } from "react-bootstrap-icons";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Sidebar = ({ title }) => {
	const { logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();
	};

	return (
		<div className="Sidebar">
			<h4>
				<Link to="/">{title}</Link>
			</h4>
			<ul className="d-flex flex-column gap-2">
				<Link to="products">
					<li className="d-flex gap-2 align-items-center">
						<Box></Box>All Products
					</li>
				</Link>
				<li className="d-flex gap-2 align-items-center" onClick={handleLogout}>
					<BoxArrowLeft></BoxArrowLeft>Logout
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
