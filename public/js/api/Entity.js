import createRequest from './createRequest';
class Entity {
  static URL = ''; // Задайте URL в наследниках

  static list(data, callback) {
    createRequest({
      url: `${this.URL}`,
      method: 'GET',
      data,
      callback,
    });
  }

  static create(data, callback) {
    createRequest({
      url: `${this.URL}`,
      method: 'POST',
      data,
      callback,
    });
  }

  static remove(data, callback) {
    createRequest({
      url: `${this.URL}/${id}`,
      method: 'DELETE',
      data,
      callback,
    });
  }
}

export default Entity;