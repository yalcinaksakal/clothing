import CategoryItem from "../category-item/category-item";
import "./directory.scss";

const Directory = ({ categories }) => {
	return (
		<div className="categories-container">
			{categories.map(({ title, id, imageUrl }) => (
				<CategoryItem title={title} imageUrl={imageUrl} key={id} />
			))}
		</div>
	);
};

export default Directory;
