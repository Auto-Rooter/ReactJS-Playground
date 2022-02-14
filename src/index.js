import React from 'react';
import ReactDOM from 'react-dom';

const year = 2022;
const greeting = (<div><h1>Hello</h1><p>React in {year}</p> </div>);
const rootNode = document.getElementById('root');

function Header() {
    return <h1>Hello React</h1>;
}

ReactDOM.render(<Header />, rootNode)