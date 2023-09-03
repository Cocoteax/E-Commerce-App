import React, { useState } from "react";
import styles from "./Item.module.css";
import { Card } from "react-bootstrap";
import ItemActions from "./ItemActions";
import { useNavigate } from "react-router-dom";

function Item(props) {
	const BASE_URL = "http://localhost:5500/images/";
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
		navigate(`/products/${props.item._id}`);
	};

	return (
		<Card
			className={`${styles.card} text-center border-0`}
			onMouseEnter={showActionsHandler}
			onMouseLeave={hideActionsHandler}
			onClick={getItemDetailsHandler}
		>
			<Card.Img
				src={`${BASE_URL}${props.item.imageURL}`}
				className={`${styles.itemImage} p-0 m-0 img-fluid`}
			/>
			<Card.Body>
				<Card.Subtitle className={`${styles.itemCategory} mb-2`}>
					{props.item.category}
				</Card.Subtitle>
				<Card.Title className={`${styles.itemTitle}`}>
					{props.item.title}
				</Card.Title>
				<Card.Text className={`${styles.itemPrice}`}>
					{`$${props.item.price}.00`}
				</Card.Text>
			</Card.Body>
			{showActions && <ItemActions id={props.item._id} />}
		</Card>
	);
}

export default Item;
