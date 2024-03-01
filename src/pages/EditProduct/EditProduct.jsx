import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import api from "../../api/api";
import ProductContext from "../../context/ProductContext";

const EditProduct = () => {
	const { products, setProducts } = useContext(ProductContext);

	const [editProductName, setEditProductName] = useState("");
	const [editPrice, setEditPrice] = useState("");
	const navigate = useNavigate();

	const { productId } = useParams();
	const product = products.find(
		(product) => product.productId.toString() === productId
	);

	useEffect(() => {
		if (product) {
			setEditProductName(product.productName);
			setEditPrice(product.price);
		}
	}, [product, setEditProductName, setEditPrice]);

	//Edit a product
	const handleEdit = async (id) => {
		const updatedProduct = {
			id,
			productName: editProductName,
			price: editPrice,
		};

		try {
			const req = api.put(
				`http://localhost:3000/api/products/${id}`,
				updatedProduct
			);
			setProducts(
				products.map((product) =>
					product.productId === id ? { ...req.data } : product
				)
			);
			setEditProductName("");
			setEditPrice("");
			navigate("/products");
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<main className="newProduct">
			{product && (
				<>
					<h1>Edit Product</h1>
					<form className="newProductForm" onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="productName">Product Name:</label>
						<input
							id="productName"
							type="text"
							required
							value={editProductName}
							onChange={(e) => setEditProductName(e.target.value)}
						/>
						<label htmlFor="price">Price:</label>
						<input
							id="price"
							type="text"
							required
							value={editPrice}
							onChange={(e) => setEditPrice(e.target.value)}
						/>
						<button type="submit" onClick={() => handleEdit(product.productId)}>
							Submit
						</button>
					</form>
				</>
			)}
			{!product && (
				<>
					<h2>Product Not Found</h2>
					<p>
						Looks like the product has either been moved or does not exist
						anymore
					</p>
					<p>
						<Link to="/products">Visit Our Homepage</Link>
					</p>
				</>
			)}
		</main>
	);
};

export default EditProduct;
