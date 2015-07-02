import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
// import Label from '../components/label';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeerDetailPage',

    render () {
        const {beer} = this.props

        return (
            <div className='container'>
              <h1>{beer.brewery}</h1>
              <h1>{beer.name}</h1>
              <h1>{beer.type}</h1>
              <h1>{beer.quantity}</h1>
              <a href="/beers">Return to Beers</a>
            </div>
        )
    }
})
