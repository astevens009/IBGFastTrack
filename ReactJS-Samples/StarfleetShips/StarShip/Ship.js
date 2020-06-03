import React from 'react';
import "./ShipStyle.css";

const starShip = (props) => {
    return(
        <div className="StarShipCard">
            <label><strong>Ship Callsign: </strong>{props.callSign}</label>
            <br/>
            <label><strong>Ship Name: </strong>{props.shipName}</label>
            <br/>
            <label onClick={props.onShipClick}>{props.children}</label>
            <br/>
            <br/>
            <label><strong>Change Ship Name:</strong></label>
            <br/>
            <input type="text" onChange={props.changeName} value={props.shipName}/>
        </div>
    )
}

export default starShip