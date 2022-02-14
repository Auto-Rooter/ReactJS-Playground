import React from 'react';
import ReactDOM from 'react-dom';

const year = 2022;
const greeting = <div>Hello React in {year}</div>;
const rootNode = document.getElementById('root');


ReactDOM.render(greeting, rootNode)