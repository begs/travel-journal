import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Card from "./Card"
import Style from "./style.css"
import Data from "./Data"
import Breakline from "./Breakline"

export default function App() {
	const cards = Data.map((item, i, arr) => {
		if (arr.length -1 === i){
			// last item in array, return with breakline
			return (
				<Card 
					key={item.id}
					{...item}
				/>
			)
		} else {
			// not last item, return without breakline
			return (
				<div>
					<Card
						key={item.id}
						{...item}
					/>
					<Breakline />
				</div>
			)
		}
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
