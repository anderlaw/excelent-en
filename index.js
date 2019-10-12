window.ajax = function(option) {
  /* 
  option:{ url,data,callback }
  */
  const baseUrl = "https://www.tech-share.cn/api";
  const xhr = new XMLHttpRequest();

  let queryStr = "?";
  var params = option.params;
  for (let key in params) {
    queryStr += `${key}=${params[key]}&`;
  }
  queryStr = queryStr.substring(0, queryStr.length - 1);
  xhr.open("get", baseUrl + option.url + queryStr);
  xhr.onload = () => {
    option.callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
};
