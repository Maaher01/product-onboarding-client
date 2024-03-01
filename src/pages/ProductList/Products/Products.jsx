import Product from "./Product/Product";
import Table from "react-bootstrap/Table";
import { useState } from "react";

const Products = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10; // Number of products per page

	// Calculate indexes for slicing the products array based on pagination
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;

	// Get the subset of products to display on the current page
	const currentProducts = products.slice(startIndex, endIndex);

	// Handle pagination button click
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th className="text-center">Name</th>
						<th className="text-center">Price</th>
						<th className="text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{currentProducts.map((product) => (
						<Product key={product.productId} product={product} />
					))}
				</tbody>
			</Table>

			{/* Pagination controls */}
			<div>
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					Previous
				</button>
				<span>Page {currentPage}</span>
				<button
					disabled={currentPage * pageSize >= products.length}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Products;
