import React from 'react';

function Card(props) {
	return (
		<div
			className="card_container"
			onClick={() => props.chosen(props.item.id)}
		>
			<div className="card_top">
				<img
					src={props.item.img}
					height="300"
					width="300"
				/>
			</div>
			<div className="card_bottom">
				<div className="item_name">{props.item.name}</div>
				<div className="latin_name"> {props.item.latinName}</div>
			</div>
		</div>
	);
}

export default Card;
