import React, { useState } from "react";
import styles from "./Item.module.css";
import { Card } from "react-bootstrap";
import ItemActions from "./ItemActions";

function Item(props) {
	const BASE_URL = "http://localhost:5500/images/";
	const [showActions, setShowActions] = useState(false);

	const showActionsHandler = () => {
		setShowActions(true);
	};

	const hideActionsHandler = () => {
		setShowActions(false);
	};

	const handler = () => {
		console.log(`item ${props.item._id} clicked from card`);
	};

	return (
		<Card
			className={`${styles.card} text-center border-0`}
			onMouseEnter={showActionsHandler}
			onMouseLeave={hideActionsHandler}
            onClick={handler}
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
