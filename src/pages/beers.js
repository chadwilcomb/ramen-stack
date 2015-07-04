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
                <table>
                  <thead>
                    <tr><td></td><td>Brewery</td><td>Name</td><td>Type</td><td>Quantity</td><td></td><td></td></tr>
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
                              <td><a href={beer.update_url} className='fa fa-pencil'></a></td>
                              <td><a href={beer.delete_url} className='fa fa-trash-o'></a></td>
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
