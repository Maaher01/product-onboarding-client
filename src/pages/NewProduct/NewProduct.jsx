import "./NewProduct.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";

const NewProduct = () => {
	const { products, setProducts } = useContext(ProductContext);

	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState("");
	const navigate = useNavigate();

	//Add new product
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newProduct = { productName: productName, price: price };

		try {
			const req = await api.post(
				"http://localhost:3000/api/products/add",
				newProduct
			);
			const allProducts = [...products, req.data];
			setProducts(allProducts);
			setProductName("");
			setPrice("");
			navigate("/products");
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<main className="newProduct">
			<h1>Add New Product</h1>
			<form className="newProductForm" onSubmit={handleSubmit}>
				<label htmlFor="productName">Product Name:</label>
				<input
					id="productName"
					type="text"
					required
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
				/>
				<label htmlFor="price">Price:</label>
				<input
					id="price"
					type="text"
					required
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
};

export default NewProduct;
