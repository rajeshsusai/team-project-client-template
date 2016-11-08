import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Home from './components/Home';

class HomePage extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}
=======
import NavBar from './components/navbar';
>>>>>>> c61af11e5eb0ac8cfa5ee672fbc66451987c74a5

class Navbar extends React.Component {
  render(){
    return (
      <NavBar />
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(<HomePage />
),document.getElementById('root');
=======
ReactDOM.render(document.getElementById('bikePage'));
>>>>>>> c61af11e5eb0ac8cfa5ee672fbc66451987c74a5
