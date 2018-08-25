import getData from '../../test/getData.js';
import getPieData from "../modules/getPieData";

const URL = "http://localhost:3000/chart1test";

function pieChartsRender() {
  return Highcharts.chart('pie', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Title',
    },
    tooltip: {
      pointFormat: '{series.name}: {point.y}<br><b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b>: {point.y}',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          },
        },
      },
    },
    series: [{
      name: 'pie',
      colors: ['#E59CA2', '#8BB281', '#E5D79A', '#84B8B6'],
      colorByPoint: true,
      data: [{
        name: 'circle サークル',
        y: 1,
      }, {
        name: 'study 自習',
        y: 1,
      }, {
        name: 'meetUp 勉強会',
        y: 1
      }, {
        name: 'work 仕事',
        y: 1,
      }]
    }],
  });
}

function pieChartRedraw() {
  const chart = pieChartsRender();
  getData(URL).then((data) => {
    let d = getPieData(data);
    chart.update(d);
  });
}

export default pieChartRedraw;
