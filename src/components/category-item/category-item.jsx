import "./category-item.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ imageUrl, title }) => {
	const navigate = useNavigate(),
		navigator = () => {
			navigate("/shop/" + title);
		};
	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="category-body-container" onClick={navigator}>
				<h2>{title}</h2>
				<p>Shop Now </p>
			</div>
		</div>
	);
};

export default CategoryItem;
