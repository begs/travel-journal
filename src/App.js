import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Card from "./Card"
import Style from "./style.css"
import Data from "./Data"

export default function App() {
	const cards = Data.map(item => {
		return (
			<Card 
				key={item.id}
				{...item}
			/>
		)
	})
	return (
			<div>
				<Header />
				<div className="cards-container">
					{cards}
				</div>
			</div>
	)
}
