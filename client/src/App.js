import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardsList.js';

// todo refactor to class
function App() {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/players`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log('error', err);
			});
	}, []);

	return (
		<div className="App">
			<CardList data={data} />
		</div>
	);
}

export default App;
