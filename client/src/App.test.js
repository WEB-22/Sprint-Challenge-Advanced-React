import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

import PlayerCard from './components/PlayerCard.js';

test('App renders without crashing', () => {
	render(<App />);
});

test('PlayerCard should render without crashing', async () => {
	const PlayerCardContainer = render(<PlayerCard />);
});
