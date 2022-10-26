import "./card.styles.css"
import React from "react";
const Card = ({ name, title }) => {

    return (
        <div className="card-container">
            <span className="name">{name}</span>
            <span className="title">{title}</span>
        </div>
    )
}
export default Card;