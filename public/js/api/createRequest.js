function createRequest(options) {
    const xhr = new XMLHttpRequest();
  
    xhr.open(options.method, options.url);
  
    if (options.method === "POST" || options.method === "PUT") {
      xhr.setRequestHeader("Content-Type", "application/json");
    }
  
    xhr.responseType = "json";
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          options.callback(null, xhr.response);
        } else {
            options.callback(new Error(`Request failed with status ${xhr.status}`), null);
        }
      }
    };
  
    xhr.send(JSON.stringify(options.data));
  }
  
  export default createRequest;