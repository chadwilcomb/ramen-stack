import Model from 'ampersand-model';
import authMixin from '../helpers/api-auth-mixin';
// import LabelCollection from './label-collection';

export default Model.extend(authMixin, {
  url () {
    let url = 'http://localhost:8080/api/beers/';
    if (this.isNew) {
      return url;
    } else {
      return url + this.id;
    }
  },
  idAttribute: '_id',
  props: {
    _id: 'string',
    brewery: 'string',
    name: 'string',
    type: 'string',
    quantity: 'number'
  },

    // collections: {
    //     labels: LabelCollection
    // },

    derived: {
        app_url: {
            deps: ['id'],
            fn () {
                return 'beers/' + this.getId();
            }
        }
    },

    fetch () {

        Model.prototype.fetch.apply(this, arguments);
        // this.labels.fetch();
    }
});
