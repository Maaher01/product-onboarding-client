import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const ProductContext = createContext({});

export const DataProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const { data, isLoading, fetchError } = useAxiosFetch(
		"http://localhost:3000/api/products"
	);

	//Fetch all products
	useEffect(() => {
		if (data && data.data) {
			setProducts(data.data);
		}
	}, [data]);

	// Product search
	useEffect(() => {
		const filteredResults = products.filter((product) =>
			product.productName.toLowerCase().includes(search.toLowerCase())
		);
		setSearchResults(filteredResults.reverse());
	}, [products, search]);

	return (
		<ProductContext.Provider
			value={{
				search,
				setSearch,
				searchResults,
				products,
				setProducts,
				fetchError,
				isLoading,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
