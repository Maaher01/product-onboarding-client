import { Pencil, Trash } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import api from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../../../context/ProductContext";

const Product = ({ product }) => {
	const { products, setProducts } = useContext(ProductContext);
	const navigate = useNavigate();

	const { productId } = useParams();

	//Delete a blog
	const handleDelete = async (id) => {
		try {
			await api.delete(`http://localhost:3000/api/products/${id}`);
			const productList = products.filter(
				(product) => product.productId !== id
			);
			setProducts(productList);
			navigate("/products");
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<tr>
			<td className="text-center">{product.productName}</td>
			<td className="text-center">Tk.{product.price}</td>
			<td className="d-flex gap-1">
				<button className="btn btn-success btn-sm">
					<Pencil></Pencil>
				</button>
				<button
					className="btn btn-danger btn-sm"
					onClick={() => handleDelete(product.productId)}
				>
					<Trash></Trash>
				</button>
			</td>
		</tr>
	);
};

export default Product;
