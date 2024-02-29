import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar/Sidebar";

const Layout = () => {
	return (
		<div>
			<Sidebar title="Product Onboarding" />
			<Outlet />
		</div>
	);
};

export default Layout;
