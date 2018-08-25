function dateformat(strDate) {
  let d = strDate.substr(0, 4)
    + '-' + strDate.substr(4, 2)
    + '-' + strDate.substr(6, 2);
  d = new Date(d).valueOf();
  return d;
}

export default dateformat;