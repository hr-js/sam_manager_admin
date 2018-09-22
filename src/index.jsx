import React from 'react';
import ReactDOM from 'react-dom';
import Pie from "./Pie";
import Stock from "./Stock";


class App extends React.Component  {
  render() {
    return (
      <div>
        <Pie />
        <Stock/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
