import React from 'react';
import pieChartRedraw from "./charts/pieChartRender";

class Pie extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pieChartRedraw();
  }

  render() {
    return (
      <div id="pie">
      </div>
    );
  }
}

export default Pie;