import React from 'react';
import ReactDOM from 'react-dom'
/*
The component for the footer.
*/
export default class Footer extends React.Component{
  render(){
    return(
      <div>
        <div className="container">
          <p className="text-muted pull-right">
              &copy; 2016 Bike Part Picker
          </p>
          <p className="text-muted pull-left">
              Designed by Group Apple
          </p>
          <p className="text-muted" style="text-align: center;">
              Note: Bike assembly not included
          </p>
      </div>
    </div>
    );
  }
}
  ReactDOM.render(
    <Footer />,
    document.getElementId("Footer")
  );
