import React from 'react';

function Card(props) {
	console.log(props.item.img);
	return (
		<div
			className="card_container"
			onClick={props.chosen}
		>
			<div className="card_top">
				<img
					src={props.item.img}
					height="150"
					width="150"
				/>
			</div>
			<div className="card_bottom">
				<div className="item_name">{props.item.name}</div>
				<div className="latin_name"> {props.item.latinName}</div>
				{/* <div className="link">
					<a href="#" /> more info
				</div> */}
			</div>
		</div>
	);
}

export default Card;
