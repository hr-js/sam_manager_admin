import React from 'react';
import stockChartsRender from "./charts/stockChartsRender";

class Stock extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    stockChartsRender();
  }

  render() {
    return (
      <div>
        <div id="container">
        </div>
      </div>
    );
  }
}

export default Stock;
