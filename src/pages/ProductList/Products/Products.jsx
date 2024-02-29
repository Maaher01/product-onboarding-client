import Product from "./Product/Product";
import Table from "react-bootstrap/Table";

const Products = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th className="text-center">Name</th>
					<th className="text-center">Price</th>
					<th className="text-center">Actions</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<Product key={product.productId} product={product} />
				))}
			</tbody>
		</Table>
	);
};

export default Products;
