import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
// import Label from '../components/label';

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'ThingDetailPage',

    onSubmitForm (event) {
        event.preventDefault();
        const {beer} = this.props;
        console.log(this.state);
        beer.save(this.state);
        //redirect to things list
        app.router.redirectTo('/beers');

    },

    onPropChange (event) {
      const {name, value, type} = event.target;
      let state = {};
      state[name] = type === 'number' ? parseInt(value, 10) : value;
      this.setState(state);
    },

    render () {
        return (
          <div className='container'>
            <h1>Add a beer to your locker</h1>
            <form name='createBeerForm' onSubmit={this.onSubmitForm}>
              <fieldset>
                <legend>Beer Info</legend>

                <div className='form-element'>
                  <label htmlFor='brewery'>Brewery</label>
                  <input onChange={this.onPropChange} id='brewery' name='brewery' type='text' placeholder='Brewery' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='name'>Name</label>
                  <input onChange={this.onPropChange} id='name' name='name' type='text' placeholder='Name' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='type'>Type</label>
                  <input onChange={this.onPropChange} id='type' name='type' type='text' placeholder='Type' className='form-input' required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='type'>Quantity</label>
                  <input onChange={this.onPropChange} id='quantity' name='quantity' type='number' placeholder='Quantity' className='form-input' required/>
                </div>

                <button type='submit' className='button button-primary'>Create!</button>

              </fieldset>
            </form>
          </div>
        )
    }
})
