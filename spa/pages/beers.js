import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeersPage',

    render () {
        const {beers} = this.props;

        return (
          <div>
            <h1>Beer Inventory</h1>
            <table className='table-with-hover'>
              <thead>
                <tr><th></th><th>Brewery</th><th>Name</th><th>Type</th><th>Quantity</th><th></th><th></th></tr>
              </thead>
              <tbody>
              {beers.map((beer) => {
                return (
                  <tr key={beer._id}>
                    <td><span className='fa fa-beer'></span></td>
                    <td><a href={beer.details_url}>{beer.brewery}</a></td>
                    <td><a href={beer.details_url}>{beer.name}</a></td>
                    <td><a href={beer.details_url}>{beer.type}</a></td>
                    <td><a href={beer.details_url}>{beer.quantity}</a></td>
                    <td><a href={beer.update_url} className='fa fa-pencil color green'></a></td>
                    <td><a href={beer.delete_url} className='fa fa-trash-o color red'></a></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
            <a href='beers/create' className='button button-outlined'><i className='fa fa-plus'></i> Add a beer</a>
          </div>
        )
    }
});
