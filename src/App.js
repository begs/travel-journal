import React from "react"
import Header from "./Header"
import Card from "./Card"
import Style from "./style.css"
import Data from "./Data"

export default function App() {
	const cards = Data.map((item, i, arr) => {
		let isLastItem = (!(arr.length -1 === i))

		return (
			<div>
				<Card
					key={item.id}
					{...item}
				/>
				{isLastItem && <hr className="breakline"></hr>}
			</div>
		)
	});

	return (
			<div>
				<Header />
				<div className="cards-container">
					{cards}
				</div>
			</div>
	)
}
