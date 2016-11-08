import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';

class Navbar extends React.Component {
  render(){
    return (
      <NavBar />
    );
  }
}

ReactDOM.render(document.getElementById('bikePage'));
