import dateformat from "./dateformat";

let seriesOptions = [],list0 =[], list1 =[], list2 =[], list3 =[],
  names = ['circle', 'study', 'meetUp', 'work'],
  colors = ['#E59CA2', '#8BB281', '#E5D79A', '#84B8B6'];


  function getStockData(data) {
    for (let i = 0; i < data.length; i++) {
      let df = dateformat(data[i]['date']);
      list0.push([df, data[i]['purpose'][names[0]]]);
      list1.push([df, data[i]['purpose'][names[1]]]);
      list2.push([df, data[i]['purpose'][names[2]]]);
      list3.push([df, data[i]['purpose'][names[3]]]);
    }
    seriesOptions[0] = {
      name: names[0],
      data: list0.reverse(),
      color: colors[0]
    };
    seriesOptions[1] = {
      name: names[1],
      data: list1.reverse(),
      color: colors[1]
    };
    seriesOptions[2] = {
      name: names[2],
      data: list2.reverse(),
      color: colors[2]
    };
    seriesOptions[3] = {
      name: names[3],
      data: list3.reverse(),
      color: colors[3]
    };

    return seriesOptions;
  }


export default getStockData;