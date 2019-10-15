import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Data from './data';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Data legendPosition="bottom" />
			</div>
		);
	}
}

export default App;
