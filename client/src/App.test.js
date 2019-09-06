import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

import PlayerCard from './components/PlayerCard.js';

// * App component
test('App renders without crashing', () => {
	render(<App />);
});

test('should have text [player name]', async () => {
	const PlayerCardContainer = render(<PlayerCard />);
});
