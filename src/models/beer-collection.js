import Collection from 'ampersand-rest-collection';
import Beer from './beer';
import authMixin from '../helpers/api-auth-mixin';

export default Collection.extend(authMixin, {

    url: 'http://localhost:8080/api/beers',

    model: Beer,

    mainIndex: '_id',

    getByName (name) {

        let model = this.findWhere({ name: name });

        if (!model) {
            model = new Beer({ name: name });
        }
        model.fetch();
        return model;
    }

});
