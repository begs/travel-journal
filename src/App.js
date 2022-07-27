import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Card from "./Card"
import Style from "./style.css"
import Data from "./data"

export default function App() {
	return (
			<div>
				<Header />
				<div className="cards-container">
					<Card />
				</div>
			</div>
	)
}
