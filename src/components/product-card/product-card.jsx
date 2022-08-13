import Button from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ name, price, imageUrl, id }) => {
	return (
		<div className="product-card-container">
			<div className="img-container">
				<img alt={name} src={imageUrl} />
			</div>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted">Add to card</Button>
		</div>
	);
};
export default ProductCard;
