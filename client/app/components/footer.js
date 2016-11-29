import React from 'react';
/*
The component for the footer.
*/
export default class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <p className="text-muted pull-right">
              &copy; 2016 Bike Part Picker
          </p>
          <p className="text-muted pull-left">
              Designed by Group Apple
          </p>
          <p className="text-muted" style={{textAlign: 'center'}}>
              Note: Bike assembly not included
              <li role="presentation" id="db-reset"></li>
          </p>
      </div>
    </footer>
    );
  }
}
