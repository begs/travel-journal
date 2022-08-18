import React from "react"

export default function (props) {
	return (
		<div className="card">
			<div className="pic-container">
				<img className="location-pic" src={props.imageUrl} alt={props.imageAltText}></img>
			</div>
			<div className="text-container">
				<p><span className="country-text"><i class="fa-solid fa-location-dot"></i>{props.location}</span><a href={props.googleMapsUrl} target="_blank" className="maps-link" aria-label="View on Google Maps">View on Google Maps</a></p>
				<header className="destination-text">{props.title}</header>
				<p className="date-text">{props.startDate} - {props.endDate}</p>
				<p className="description-text">{props.description}</p>
				<p className="test">{props.isLast}</p>
			</div>
		</div>
	)
}
