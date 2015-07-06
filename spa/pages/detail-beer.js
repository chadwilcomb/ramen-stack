import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  
  mixins: [ampersandMixin],

  displayName: 'BeerDetailPage',

  render () {

    const {beer} = this.props

    return (
      <div className='container'>
        <p>Brewery: <strong>{beer.brewery}</strong></p>
        <p>Name: <strong>{beer.name}</strong></p>
        <p>Type: <strong>{beer.type}</strong></p>
        <p>Quantity: <strong>{beer.quantity}</strong></p>
        <a href="/beers">Return to Beers</a>
      </div>
    )
  }
});
