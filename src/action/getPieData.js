function getPieData(data) {

  return {
    series: [{
      data: [{
        name: 'circle サークル',
        y: data[0].purpose.circle,
      }, {
        name: 'study 自習',
        y: data[0].purpose.study,
      }, {
        name: 'meetUp 勉強会',
        y: data[0].purpose.meetUp
      }, {
        name: 'work 仕事',
        y: data[0].purpose.work,
      }]
    }]
  }
}


export default getPieData;