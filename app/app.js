import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

class HomePage extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

class NavBar extends React.Component {
  render() {
    return <NavBar />
  }
}

ReactDOM.render(<HomePage />
),document.getElementById('root');
