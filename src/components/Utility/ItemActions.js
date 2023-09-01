import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import styles from "./ItemActions.module.css"

function ItemActions() {
    return (
        <>
            <div className={`${styles.likeButton}`}>
                <i className="fa-regular fa-heart"></i>
            </div>
            <Container
                className={`bg-white ${styles.bottomActionsContainer} mb-2`}
            >
                <Row className={`h-100`}>
                    <Col className={`d-flex justify-content-center align-items-center ${styles.bottomActionsCol}`}>
                        <i className="fa-solid fa-cart-plus"></i>
                    </Col>
                    <Col className={`d-flex justify-content-center align-items-center ${styles.bottomActionsCol}`}>
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemActions