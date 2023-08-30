import React, { useState } from "react";
import styles from "./Item.module.css";
import { Card } from "react-bootstrap";
import womenShirt1 from "../assets/women-shirt-1.webp";
import ItemActions from "./ItemActions";

function Item() {

    const [showActions, setShowActions] = useState(false)

    const showActionsHandler = () => {
        setShowActions(true)
    }

    const hideActionsHandler = () => {
        setShowActions(false)
    }
    return (
        <>
            {/* Handle touch event later */}
            <Card className={`ms-5 mb-5 ${styles.card}`} onMouseEnter={showActionsHandler} onMouseLeave={hideActionsHandler}>
                <Card.Img src={womenShirt1} className={`${styles.itemImage}`} />
                {showActions && <ItemActions />}
            </Card>
        </>
    );
}

export default Item;
