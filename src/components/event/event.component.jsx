import React from "react";
import GlowwingButton from "../glowing-button/glowing-button.component";
import "./event.styles.css"

const Event = ({ event }, ltr) => {
    const { eventName, eventDesc, eventImage, eventLink } = event;

    const styles = {
        display: "flex",
        flexDirection: ltr ? "row" : "row-reverse",

    }
    console.log(eventImage)

    return (
        <div className="event-container" style={styles}>
            <div className="event-details">
                <h1 className="event-name">{eventName}</h1>
                <div className="event-desc">
                    {eventDesc}
                </div>
                <GlowwingButton />
            </div>
            <div className={"image-container"}>
                <img src={eventImage} alt="event" className="img" />
            </div>

        </div>
    )
}
export default Event;