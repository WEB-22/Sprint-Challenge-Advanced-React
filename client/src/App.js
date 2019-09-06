import React from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardsList.js';

// function App() {
// 	const [ data, setData ] = useState([]);

// 	useEffect(() => {
// 		axios
// 			.get(`http://localhost:5000/api/players`)
// 			.then((res) => {
// 				setData(res.data);
// 			})
// 			.catch((err) => {
// 				console.log('error', err);
// 			});
// 	}, []);

// 	return (
// 		<div className="App">
// 			<CardList data={data} />
// 		</div>
// 	);
// }

class App extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	componentDidMount() {
		const url = 'http://localhost:5000/api/players';
		axios.get(url).then((res) => {
			this.setState({ data: res.data });
		});
	}

	render() {
		return (
			<div className="App">
				<CardList data={this.state.data} />
			</div>
		);
	}
}

export default App;
