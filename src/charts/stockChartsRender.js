import getData from '../modules/getData';
import getStockData from "../modules/getStockData";

const URL = "http://localhost:3000/chart1test";

function stockChartRender() {
  return Highcharts.stockChart('container', {
    rangeSelector: {
      selected: 4
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      labels: {
        formatter: function () {
          return (this.value > 0 ? ' + ' : '') + this.value;
        }
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },
    plotOptions: {
      series: {
        compare: 'null',// y軸設定
        showInNavigator: true
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      valueDecimals: 0,
      split: true
    },
    series:
      [{
        color: "#6e6e6e",
        data: [[1482192000000, 0]],
        name: "",
      },{
        color: "#6e6e6e",
        data: [[1482192000000, 0]],
        name: "",
      },{
        color: "#6e6e6e",
        data: [[1482192000000, 0]],
        name: "",
      },{
        color: "#6e6e6e",
        data: [[1482192000000, 0]],
        name: "",
      }
    ]
  });
}

function stockChartRedraw() {
  const chart = stockChartRender();
  getData(URL).then((d) => {
    let data = {series: getStockData(d)};
    chart.update(data);
  });
}
export default stockChartRedraw;