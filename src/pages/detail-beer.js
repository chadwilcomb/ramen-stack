import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeerDetailPage',

    render () {
        const {beer} = this.props

        return (
            <div className='container'>
              <h2>{beer.brewery}</h2>
              <h1>{beer.name}</h1>
              <h3>{beer.type}</h3>
              <h1>{beer.quantity}</h1>
              <a href="/beers">Return to Beers</a>
            </div>
        )
    }
});
