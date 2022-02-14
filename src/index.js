import React from 'react';
import ReactDOM from 'react-dom';

const year = 2022;
const greeting = (<div><h1>Hello</h1><p>React in {year}</p> </div>);
const rootNode = document.getElementById('root');
const isAuthenticated = true;

function Header(props) {
    return <h1>Hello {props.username}</h1>;
}

function Login() {
    return <p>Please Login!</p>
}

function Logout() {
    return <button>Sign Out</button>
}

function Layout(props) {
    return <div style={{ background: 'palegoldenrod' }}>
        {props.children}
    </div>
}

function Person(props) {
    return <li>{props.person}</li>
}

function App() {
    const people = ['John', 'Dave', 'Jane'];

    return (<ul>
        {people.map((person, i) => <Person key={i} person={person} />)}
    </ul>)
}

ReactDOM.render(<App />, rootNode) 