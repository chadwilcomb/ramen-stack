import Collection from 'ampersand-rest-collection';
import Beer from './beer';
import authMixin from '../helpers/api-auth-mixin';

export default Collection.extend(authMixin, {

    url: 'http://localhost:8080/api/beers',

    model: Beer,

    mainIndex: '_id',

});
