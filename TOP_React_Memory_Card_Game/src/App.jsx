import React, { useState, useEffect } from 'react';
import './meyer.css';
import './index.css';
import Card from './components/Card';
import cardData from './cardData';

function App() {
	const [hasRendered, setHasRendered] = useState(false);
	const [cards, setCards] = useState(cardData);
	const [allTrueClicks, setAllTrueClicks] = useState(false);
	const [wrongClick, setWrongClick] = useState(false);
	const [oldTrueCount, setOldTrueCount] = useState(0);
	const [newTrueCount, setNewTrueCount] = useState(0);
	const [totalClickCount, setTotalClickCount] = useState(0);
	const [gameState, setGameState] = useState(false);

	/* 	console.log(
		'clicked array',
		cards.map(item => item.clicked)
	); */

	function handleCardClick(cardId) {
		// toggles card state from false to true
		setCards(prevState => prevState.map(card => (card.id === cardId ? { ...card, clicked: !card.clicked } : card)));
	}

	const handleNewGame = () => {
		setGameState(!gameState);
		setCards(cardData);
		setAllTrueClicks(false);
		setWrongClick(false);
		setOldTrueCount(0);
		setNewTrueCount(0);
		setTotalClickCount(-1);
		setGameState(0);
	};

	useEffect(() => {
		setGameState(!gameState);
		//console.log('this useeffect used', gameState);
	}, [wrongClick]);

	useEffect(() => {
		setGameState(!gameState);
		//console.log('this useeffect used', gameState);
	}, [allTrueClicks]);

	useEffect(() => {
		const firstValue = cards[0].clicked === true;
		const allTrue = cards.every(card => card.clicked === firstValue);
		allTrue && firstValue ? setAllTrueClicks(true) : null;

		const clickedArr = cards.map(item => item.clicked);
		const countOftrue = clickedArr.filter(Boolean).length;

		setOldTrueCount(newTrueCount);
		setNewTrueCount(countOftrue);
		setTotalClickCount(hasRendered ? totalClickCount + 1 : totalClickCount);
		setHasRendered(true);
	}, [cards]);

	useEffect(() => {
		const clickedArr = cards.map(item => item.clicked);
		const countOftrue = clickedArr.filter(Boolean).length;
		setWrongClick(oldTrueCount > countOftrue);
	}, [newTrueCount]);

	function shuffleCards(cardData) {
		const shuffled = cardData
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		return shuffled;
	}

	const shuffleCardData = shuffleCards(cardData);

	const cardDisplay = shuffleCardData.map(item => {
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
			{gameState && (
				<header className="header">
					<div className="left_header">
						<h1 className="title">Memory Card - Noxious Weeds of PA Edition</h1>
						<p className="instructions">
							Do you know your Class A noxious weeds? Get points by clicking on an image, but be sure to not click the
							same image twice or it's game over! Good Luck!!!
						</p>
					</div>
					<div className="score">
						<div>score:</div>
						<div className="current_score">{totalClickCount}</div>
						{/* <div className="high_score"> high: 5</div> */}
					</div>
				</header>
			)}
			{gameState && <main className="main">{cardDisplay}</main>}
			{!gameState && (
				<div className="game_over">
					<div className="game_over_title"> {allTrueClicks ? 'You Won!' : 'Game Over!'} </div>
					<div className="game_over_text">
						{allTrueClicks ? `Your score was: ${totalClickCount}` : `Your score was: ${totalClickCount - 1}`}
					</div>
					<button
						className="new_game_button"
						onClick={handleNewGame}
					>
						Try Again?
					</button>
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
