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
    <>
      {/* Handle touch event later */}
      <Card
        className={`${styles.card} text-center`}
        onMouseEnter={showActionsHandler}
        onMouseLeave={hideActionsHandler}
      >
        <Card.Img src={props.item.img} className={`${styles.itemImage}`} />
        {showActions && <ItemActions />}
      </Card>
      <div className={`${styles.itemDescription} text-center mt-3`}>{props.item.description}</div>
      <div className={`${styles.itemPrice} text-center mt-2`}>{props.item.price}</div>
    </>
  );
}

export default Item;
