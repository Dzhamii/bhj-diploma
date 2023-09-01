import createRequest from './createRequest';

class User {
  static URL = '/user';

 
  static setCurrent(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  static unsetCurrent() {
    localStorage.removeItem('user');
  }


  static current() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }


  static fetch(callback) {
    createRequest({
      url: this.URL + '/current',
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
      url: this.URL + '/login',
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
      url: this.URL + '/register',
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
      url: this.URL + '/logout',
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
