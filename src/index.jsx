import React from 'react';
import ReactDOM from 'react-dom';
import Stock from "./Stock";
import Pie from "./Pie";

class App extends React.Component  {
  render() {
    return (
      <div>
        <Stock />
        <Pie />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
