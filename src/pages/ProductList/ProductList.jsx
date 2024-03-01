import Products from "./Products/Products";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { Plus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

const ProductList = () => {
	const { searchResults, isLoading, fetchError } = useContext(ProductContext);

	return (
		<main className="Home">
			<div className="d-flex justify-content-between mb-4 mt-5">
				<h5>All Products</h5>
				<Link to={`/products/add`}>
					<button className="btn btn-primary btn-sm">
						<Plus></Plus>
						New Product
					</button>
				</Link>
			</div>

			<div className="mb-4">
				<SearchForm />
			</div>

			{isLoading && <p className="statusMsg">Loading Products...</p>}
			{!isLoading && fetchError && (
				<p className="statusMsg" style={{ color: "red" }}>
					{fetchError}
				</p>
			)}
			{!isLoading &&
				!fetchError &&
				(searchResults.length ? (
					<Products products={searchResults} />
				) : (
					<p style={{ margin: "2rem" }}>No products to display</p>
				))}
		</main>
	);
};

export default ProductList;
