import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeersPage',

    render () {
        const {beers} = this.props;

        return (
            <div>
                <h1>Beers</h1>

                <div>
                    {beers.map((beer) => {
                        return (
                            <div key={beer.id}>
                                <a href={beer.app_url}><span className='fa fa-beer'></span> {beer.brewery} {beer.name} {beer.type} {beer.quantity}</a>
                            </div>
                        )
                    })}
                </div>
                
                <a href='beers/create' className='button button-outlined'><i className='fa fa-plus'></i> Add a beer</a>
            </div>
        )
    }
});
