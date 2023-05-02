import React, { useState } from 'react';
import './meyer.css';
import './index.css';
import Card from './components/Card';
import cardData from './cardData';

function App() {
	const [clicked, setClicked] = useState(false);

	function handleCardClick() {
		return setClicked(cli);
	}

	const cardDisplay = cardData.map((item, index) => {
		return (
			<Card
				key={index}
				item={item}
				chosen={handleCardClick}
			/>
		);
	});

	return (
		<div className="container">
			<header className="header">
				<div className="left_header">
					<h1 className="title">Memory Card - Noxious Weeds of PA Edition</h1>
					<p className="instructions">
						Do you know your class A noxious weeds? Get points by clicking on an image, but be sure to not click the
						same image twice or it's game over! Good Luck!!!
					</p>
				</div>
				<div className="score">
					<div>score:</div>
					<div className="current_score"> current score: 3</div>
					<div className="high_score"> high score: 5</div>
				</div>
			</header>
			<main className="main">{cardDisplay}</main>
			<div className="game_over">
				<div className="game_over_title">Game Over </div>
				<div className="game_over_text">Your score was: 3 </div>
				<button className="new_game_button">Try again?</button>
			</div>
			<footer className="footer"> © JustWaveThings</footer>
		</div>
	);
}

export default App;
