import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <div>Hello React</div>;
const isReactUser = false;
const rootNode = document.getElementById('root');


if (isReactUser) {
    ReactDOM.render(greeting, rootNode)
} else {
    ReactDOM.render(<div> Hello Javascript</div>, rootNode)
}
