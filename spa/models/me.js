import xhr from 'xhr'
import Model from 'ampersand-model'
import BeerCollection from './beer-collection'
import authMixin from '../helpers/api-auth-mixin'

export default Model.extend(authMixin, {

  methodToURL () {
    let url = app.apiUrl + '/api/users/';
    return {
      'read': url + this.getId(),
      'create': url,
      'update': url + this.getId(),
      'delete': url + this.getId()
    }
  },

  url () {
    let url = app.apiUrl + '/api/users/';
    if (this.isRegister) {
      return url;
    }
    return url + this.username;
  },

  initialize () {
    if (window.localStorage.me) {
      this.set(JSON.parse(window.localStorage.me));
    }
    this.on('change:username change:password', this.updateAuthHeader);
    this.on('change', this.syncToLocalStorage);
    this.on('sync', this.onSync);
  },

  props: {
    joined: 'date',
    username: 'string',
    password: 'string',
    authHeader: 'object'
  },

  session: {
    authenticated: {
      type: 'boolean',
      default: false
    },
    isRegister: {
      type: 'boolean',
      default: false
    }
  },

  collections: {
    beers: BeerCollection
  },

  syncToLocalStorage () {
    window.localStorage.me = JSON.stringify({
      username: this.username,
      authHeader: this.authHeader,
      authenticated: this.authenticated
    });
  },

  updateAuthHeader () {
    this.authHeader = window.localStorage.authHeader = {
      Authorization: 'Basic ' + btoa(this.username + ":" + this.password)
    };
  },

  onSync (model, resp, options) {
    this.set('authenticated', true);
  },

  fetchInitialData () {
    this.beers.fetch();
  }

});
