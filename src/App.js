import React, {Component} from 'react';
import Paragraph from './Paragraph';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';

export default class App extends Component {
	render() {
		return (
			<div className="my-app">
				<h1>This is React!!!</h1>
				<Button label="Hello World!" />
				<Paragraph text="First Paragraph" />
				<Paragraph text="Second Paragraph" />
			</div>
		);
	}
}
