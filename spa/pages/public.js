import React from 'react';
import NavHelper from '../components/nav-helper';
import app from 'ampersand-app';

export default React.createClass({
    displayName: 'PublicPage',

    getInitialState () {
        return {
            username: '',
            password: '',
            error: false
        };
    },

    onSubmitForm (event) {
      var _this = this;
      event.preventDefault();
      _this.setState({ error: false });
      console.log('onsubmit')
      const {me} = this.props;

      me.set(this.state);
      me.fetch({
        username: me.username,
        error: function (model, response, options) {
          _this.setState({ error: true });
        },
        success: function () {
          me.authenticated = true;
          app.router.redirectTo('/beers');
        }
      });
    },

    onUsernameChange (event) {
        this.setState({
            username: event.target.value
        });
    },

    onPasswordChange (event) {
        this.setState({
            password: event.target.value
        });
    },

    render () {
        const {messages} = this.props;
        const {username,password,error} = this.state;

        return (
          <div className='container'>
            <h1>Sign in to RAMEN</h1>

            <form name='signinForm' onSubmit={this.onSubmitForm} >
              <fieldset>
                <legend>Sign In</legend>
                <div className={error ? 'message message-error' : 'hidden'}>Your username and/or password are incorrect</div>
                <div className='form-element'>
                  <label htmlFor='inputUsername'>Username</label>
                  <input id='inputUsername' onChange={this.onUsernameChange} name='inputUsername' placeholder='Enter username' className='form-input' type='text' value={username} required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='inputPassword'>Password</label>
                  <input id='inputPassword' onChange={this.onPasswordChange} name='inputPassword' placeholder='Enter password' className='form-input' type='password'  value={password} required/>
                </div>
                <button type='submit' className='button button-primary'>Sign in</button>

              </fieldset>
            </form>
          </div>
        )
    }
});
