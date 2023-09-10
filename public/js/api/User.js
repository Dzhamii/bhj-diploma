const createRequest = options => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  const url = options.url;
  const formData = new FormData();

  if (options.method === 'GET') {
    if (options.data) {
      for (let key in options.data) {
        url += `&${key}=${options.data[key]}`;
      }
    }

    xhr.open(options.method, url);
    xhr.send();
  } else {
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    }

    xhr.open(options.method, url);
    xhr.send(formData);
  }

  xhr.onload = () => {
    options.callback(null, xhr.response);
  };

  xhr.onerror = () => {
    options.callback(xhr.response, null);
  };
};


class User {
  static setCurrent(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  static current() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static fetch(callback) {
    createRequest({
      url: '/user/current',
      method: 'GET',
      responseType: 'json',
      callback: (err, response) => {
        if (response && response.success) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  static login(data, callback) {
    createRequest({
      url: '/user/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  static register(data, callback) {
    createRequest({
      url: '/user/register',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  static logout(callback) {
    createRequest({
      url: '/user/logout',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response && response.success) {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    });
  }
}

export default User;
