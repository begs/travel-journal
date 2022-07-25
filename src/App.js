import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Card from "./Card"
import Style from "./style.css"

export default function () {
	return (
			<div>
				<Header />
				<div className="cards-container">
					<Card />
				</div>
			</div>
	)
}
