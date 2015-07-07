import Collection from 'ampersand-rest-collection';
import app from 'ampersand-app';
import Beer from './beer';
import authMixin from '../helpers/api-auth-mixin';

export default Collection.extend(authMixin, {

    url () {
      return app.apiUrl + '/api/beers';
    },

    model: Beer,

    mainIndex: '_id',

});
