import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import MessagePage from './message';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeerDeletePage',

    onClickDelete () {
      const {beer} = this.props
      beer.destroy({
        success: function () {
          app.router.redirectTo('/beers');
        },
        error: function () {
          app.router.renderPage(<MessagePage title='Error deleting beer.' />);
        },
      });

    },

    render () {
        const {beer} = this.props

        return (
            <div className='container'>
              <h2>Are you sure you want to delete this beer?</h2>
              <h3>{beer.brewery} {beer.name} {beer.type} {beer.quantity}</h3>

              <button type='button' className='button button-warn' onClick={this.onClickDelete}>Delete</button>
              <br/>
              <br/>
              <a href="/beers">Return to Beers</a>
            </div>
        )
    }
})
