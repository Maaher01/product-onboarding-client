import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
	return (
		<main className="PageNotFound">
			<h2>404: Page Not Found</h2>
			<p>
				<Link to="/">Back To Homepage</Link>
			</p>
		</main>
	);
};

export default PageNotFound;
