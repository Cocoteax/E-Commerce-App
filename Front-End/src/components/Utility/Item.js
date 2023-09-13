import React, { useState } from "react";
import styles from "./Item.module.css";
import { Card } from "react-bootstrap";
import ItemActions from "./ItemActions";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../Utility/BaseURL";

function Item(props) {
	// Destructure items from props
	// NOTE: We use nested object destructuring
	const {
		item: { category, imageURL, title, price, _id: productID },
		item,
	} = props;

	const [showActions, setShowActions] = useState(false);
	const navigate = useNavigate();

	const showActionsHandler = () => {
		setShowActions(true);
	};

	const hideActionsHandler = () => {
		setShowActions(false);
	};

	// Navigate to item details page for this specific item
	const getItemDetailsHandler = () => {
		navigate(`/products/${productID}`);
	};

	return (
		<Card
			className={`${styles.card} text-center border-0`}
			onMouseEnter={showActionsHandler}
			onMouseLeave={hideActionsHandler}
			onClick={getItemDetailsHandler}
		>
			<Card.Img
				src={`${BASE_URL}/images/${imageURL}`}
				className={`${styles.itemImage} p-0 m-0 img-fluid`}
			/>
			<Card.Body>
				<Card.Subtitle className={`${styles.itemCategory} mb-2`}>
					{category}
				</Card.Subtitle>
				<Card.Title className={`${styles.itemTitle}`}>{title}</Card.Title>
				<Card.Text className={`${styles.itemPrice}`}>
					{`$${price}.00`}
				</Card.Text>
			</Card.Body>
			{showActions && <ItemActions item={item} />}
		</Card>
	);
}

export default Item;
