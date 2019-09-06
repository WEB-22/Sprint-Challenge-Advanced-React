import React, { useState } from 'react';
import PlayerCard from './PlayerCard.js';

import { Card, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import useDarkMode from '../hooks/useDarkMode.js';

const CardList = ({ data }) => {
	// * Darkmode hook and toggle function
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<div>
			<button onClick={toggleMode} className="dark-btn">
				Change Background
			</button>
			<Card.Group itemsPerRow={6}>
				{data.map((player) => {
					return (
						<PlayerCard
							name={player.name}
							country={player.country}
							searches={player.searches}
							key={player.id}
						/>
					);
				})}
			</Card.Group>
		</div>
	);
};

export default CardList;
