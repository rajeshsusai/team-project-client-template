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

ReactDOM.render(<HomePage />
),document.getElementById('root');
