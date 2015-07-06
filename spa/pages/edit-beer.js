import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import MessagePage from './message';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'BeerEditPage',

    onSubmitForm (event) {
        event.preventDefault();
        const {beer} = this.props;
        beer.save(this.state, {
          success: function () {
            app.router.redirectTo('/beers');
          },
          error: function () {
            app.router.renderPage(<MessagePage title='Error saving beer.' />);
          },
        });
    },

    onPropChange (event) {
      const {name, value, type} = event.target;
      let state = {};
      state[name] = type === 'number' ? parseInt(value, 10) : value;
      this.setState(state);
    },

    render () {
        const {beer} = this.props

        return (
          <div className='container'>
            <h1>Add a beer to your locker</h1>
            <form name='createBeerForm' onSubmit={this.onSubmitForm}>
              <fieldset>
                <legend>Beer Info</legend>

                <div className='form-element'>
                  <label htmlFor='brewery'>Brewery</label>
                  <input onChange={this.onPropChange} defaultValue={beer.brewery} id='brewery' name='brewery' type='text' placeholder='Brewery' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='name'>Name</label>
                  <input onChange={this.onPropChange} defaultValue={beer.name} id='name' name='name' type='text' placeholder='Name' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='type'>Type</label>
                  <input onChange={this.onPropChange} defaultValue={beer.type} id='type' name='type' type='text' placeholder='Type' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='type'>Quantity</label>
                  <input onChange={this.onPropChange} defaultValue={beer.quantity} id='quantity' name='quantity' type='number' placeholder='Quantity' className='form-input' required/>
                </div>

                <button type='submit' className='button button-primary'>Save Changes</button>
                <button type='reset' className='button button-neutral'>Reset</button>

              </fieldset>
            </form>
          </div>
        )
    }
});
