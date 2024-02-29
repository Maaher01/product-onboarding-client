import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title }) => {
	return (
		<>
			<div className="Sidebar">
				<h4>
					<Link to="/">{title}</Link>
				</h4>
				<ul>
					<li>
						<Link to="products">All Products</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
