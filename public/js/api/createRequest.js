const createRequest = options => {
    const xhr = new XMLHttpRequest;
  
    xhr.responseType = options.responseType || "json";
  
    if (options.method === "GET") {
      if (options.data) {
        options.url += "?";
  
        for (let key in options.data) {
          options.url += `${key}=${options.data[key]}&`;
        }
  
        options.url = options.url.slice(0, -1);
      }
  
      xhr.open(options.method, options.url);
  
      xhr.send();
    } else {
      const formData = new FormData();
  
      for (let key in options.data) {
        formData.append(key, options.data[key]);
      }
  
      xhr.open(options.method, options.url);
  
      xhr.send(formData);
    }
  
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        options.callback(null, xhr.response);
      } else {
        options.callback(xhr.response, null);
      }
    };
  
    xhr.onerror = () => {
      options.callback(xhr.response, null);
    };
  };