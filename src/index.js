import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <div>Hello React</div>;
const isReactUser = true;
const rootNode = document.getElementById('root');

function sayGreating() {
    if (isReactUser) {
        return greeting;
    } else {
        return <div> Hello Javascript</div>;
    }
}

ReactDOM.render(sayGreating(), rootNode)