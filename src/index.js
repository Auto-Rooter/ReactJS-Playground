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

ReactDOM.render(<Layout>
    {isAuthenticated ? <Header username="Auto" /> : <Login />}
    {isAuthenticated && <Logout />}
    <footer>Copyright 2022</footer>
</Layout>, rootNode)