import React from 'react';
import ReactDOM from 'react-dom';

const year = 2022;
const greeting = (<div><h1>Hello</h1><p>React in {year}</p> </div>);
const rootNode = document.getElementById('root');

function Header(props) {
    return <h1>Hello {props.username}</h1>;
}


function Layout(props) {
    return <div style={{ background: 'palegoldenrod' }}>
        {props.children}
    </div>
}

ReactDOM.render(<Layout>
    <Header username="Auto">
        <footer>Copyright 2022</footer>
    </Header>
</Layout>, rootNode)