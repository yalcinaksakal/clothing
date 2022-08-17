import Directory from "../../components/directory/directory";
import { useSelector } from "react-redux";

const Home = () => {
	const categories = Object.values(useSelector(state => state.shop.products))
		.map(category => ({
			id: category.id,
			title: category.title,
			imageUrl: category.imageUrl,
		}))
		.sort((a, b) => a.id - b.id);

	return (
		<div>
			<Directory categories={categories} />
		</div>
	);
};

export default Home;
