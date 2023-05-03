import React, { useState, useEffect } from 'react';
import './meyer.css';
import './index.css';
import Card from './components/Card';
import cardData from './cardData';

function App() {
	const [cards, setCards] = useState(cardData);
	const [gameOver, setGameOver] = useState(false);
	console.log(cards);

	function handleCardClick(cardId) {
		setCards(prevState => prevState.map(card => (card.id === cardId ? { ...card, clicked: !card.clicked } : card)));
	}

	const cardDisplay = cardData.map(item => {
		return (
			<Card
				key={item.id}
				item={item}
				chosen={() => handleCardClick(item.id)}
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
					<div className="current_score"> current: 3</div>
					<div className="high_score"> high: 5</div>
				</div>
			</header>
			{!gameOver && <main className="main">{cardDisplay}</main>}
			{gameOver && (
				<div className="game_over">
					<div className="game_over_title">Game Over </div>
					<div className="game_over_text">Your score was: 3 </div>
					<button className="new_game_button">Try Again?</button>
				</div>
			)}
			<footer className="footer"> © JustWaveThings</footer>
		</div>
	);
}

export default App;

/* 	useEffect(() => {
		const cardIds = cardData.map(item => item.id);
		setCardId(cardIds);
	}, [cardData]);

	function shuffleCards(cardId) {
		const shuffled = cardId
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);

		return shuffled;
	} */
