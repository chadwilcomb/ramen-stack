import xhr from 'xhr'
import Model from 'ampersand-model'
import BeerCollection from './beer-collection'
import authMixin from '../helpers/api-auth-mixin'

export default Model.extend(authMixin, {

    url () {
      return app.apiUrl + '/api/users/' + this.username;
    },

    initialize () {
      if (window.localStorage.me) {
        this.set(JSON.parse(window.localStorage.me));
      }

      this.on('change:username change:password', this.updateAuthHeader);
      this.on('change', this.syncToLocalStorage);
      this.on('sync', this.onSync);

    },

    idAttribute: 'username',

    props: {
      joined: 'date',
      username: 'string',
      password: 'string',
      authHeader: 'object'
    },

    session: {
      authenticated: 'boolean'
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
