import React, { useState } from "react";
import styles from "./Item.module.css";
import { Card } from "react-bootstrap";
import ItemActions from "./ItemActions";

function Item(props) {
	const [showActions, setShowActions] = useState(false);

	const showActionsHandler = () => {
		setShowActions(true);
	};

	const hideActionsHandler = () => {
		setShowActions(false);
	};
	return (
		<Card
			className={`${styles.card} text-center border-0`}
			onMouseEnter={showActionsHandler}
			onMouseLeave={hideActionsHandler}
		>
			<Card.Img src={props.item.img} className={`${styles.itemImage} p-0 m-0 img-fluid`} />
			<Card.Body>
				<Card.Subtitle className={`${styles.itemCategory} mb-2`}>
					{props.item.category}
				</Card.Subtitle>
				<Card.Title className={`${styles.itemDescription}`}>
					{props.item.description}
				</Card.Title>
				<Card.Text className={`${styles.itemPrice}`}>
					{props.item.price}
				</Card.Text>
			</Card.Body>
			{showActions && <ItemActions />}
		</Card>
	);
}

export default Item;
