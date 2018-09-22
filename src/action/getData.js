function getData(URL) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.responseType = "json";
    req.onload =  () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

export default getData;
