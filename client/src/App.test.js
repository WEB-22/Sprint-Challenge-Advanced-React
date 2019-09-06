import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

// * App component
test('App renders without crashing', () => {
	render(<App />);
});
