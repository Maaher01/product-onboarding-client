import "./SearchForm.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const SearchForm = () => {
	const { search, setSearch } = useContext(ProductContext);

	return (
		<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
			<input
				id="search"
				type="text"
				placeholder="Search Products"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
