import React from "react"
import data from "../data"
import { LocationMarkerIcon } from "@heroicons/react/solid";


export default function Cards(props) {
    return (
        <>
           <div className="card-section">
            <img src={`../images/${props.imageUrl}`} className="card--image" />
                <div className="card--details">
                <div className="card--location">
                <LocationMarkerIcon className="marker--icon" />
                <p className="location--text">{props.location}</p>
                <a href="{props.googleMapsUrl}" className="google-maps-link">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="date--text">{props.startDate} - {props.endDate}</p>
                <p className="description--text">{props.description}</p>
                </div>
          </div>
         {props.id != 3 && <hr className="horizontal--line" />}
       </>        
    );
}