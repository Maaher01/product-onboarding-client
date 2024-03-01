import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ title }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<div className="Sidebar">
			<h4>
				<Link to="/">{title}</Link>
			</h4>
			<ul>
				<Link to="products">
					<li>All Products</li>
				</Link>
				<li onClick={handleLogout}>Logout</li>
			</ul>
		</div>
	);
};

export default Sidebar;
