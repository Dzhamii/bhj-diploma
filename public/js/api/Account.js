import Entity from './Entity';

class Account extends Entity {
  static URL = '/account'; 

  static get(id, callback) {
    createRequest({
      url: `${this.URL}/${id}`,
      method: 'GET',
      callback,
    });
  }
}

export default Account;
