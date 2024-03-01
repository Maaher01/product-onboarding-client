import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductList from "./pages/ProductList/ProductList";
import { DataProvider } from "./context/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NewProduct from "./pages/NewProduct/NewProduct";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
	return (
		<DataProvider>
			<Routes>
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="products">
						<Route index element={<ProductList />} />
						<Route path="add" element={<NewProduct />} />
						<Route path="edit/:productId" element={<EditProduct />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</DataProvider>
	);
}

export default App;
