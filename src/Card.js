import React from "react"

export default function (props) {
	return (
		<div className="card">
			<div className="pic-container">
				<img className="location-pic" src={props.imageUrl}></img>
			</div>
			<div className="text-container">
				<p><span className="country-text"><i class="fa-solid fa-location-dot"></i>{props.location}</span><a href={props.googleMapsUrl} target="_blank" className="maps-link">View on Google Maps</a></p>
				<p className="destination-text">{props.title}</p>
				<p className="date-text">{props.startDate} - {props.endDate}</p>
				<p className="description-text">{props.description}</p>
			</div>
		</div>
	)
}
