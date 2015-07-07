import Model from 'ampersand-model';
import app from 'ampersand-app'
import authMixin from '../helpers/api-auth-mixin';

export default Model.extend(authMixin, {

  url () {
    let url = app.apiUrl + '/api/beers/';
    if (this.isNew()) {
      return url;
    } else {
      return url + this.getId();
    }
    return url;
  },

  idAttribute: '_id',

  props: {
    _id: 'string',
    brewery: 'string',
    name: 'string',
    type: 'string',
    quantity: 'number'
  },

  derived: {
    details_url: {
      deps: ['id'],
      fn () {
        return 'beers/' + this.getId();
      }
    },
    update_url: {
      deps: ['id'],
      fn () {
        return 'beers/edit/' + this.getId();
      }
    },
    delete_url: {
      deps: ['id'],
      fn () {
        return 'beers/delete/' + this.getId();
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments);
  }
});
