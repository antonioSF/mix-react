import React from 'react';

import ReactDOM from 'react-dom';

import Header from './components/Header';

class PageTitle extends React.Component {

	render() {
		return <div>
			<Header />
			<section className="block">
				<h1 className="block__title">{this.props.title}</h1>
			</section>
		</div>
	}

}

const App = document.getElementById('js-app');

ReactDOM.render(<PageTitle title="Lorem ipsum dolor sit amet" />, App);

