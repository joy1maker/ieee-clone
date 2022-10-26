import React from "react"
import swigleLine from "../../assets/line.png"
import "./spreate-section.styles.css"
const SpreatorSection = ({ spreate, line, title, desc }) => {


    return (
        <React.Fragment>
            {spreate ? <div className="hr"></div> : null}
            <div className="spreateor-container">

                {title ? <div className="title">{title}</div> : null}
                {desc ? <div className="desc">{desc}</div> : null}
                {line ? <img src={swigleLine} className={"swiggle-line"} alt={"line"} /> : null}
            </div>
        </React.Fragment>


    )
}

export default SpreatorSection;