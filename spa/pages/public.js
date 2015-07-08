import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
    displayName: 'PublicPage',

    getInitialState () {
        return {
            username: '',
            password: '',
            error: ''
        };
    },

    onSubmitForm (event) {
      var _this = this;
      event.preventDefault();

      _this.setState({ error: false });
      const {me} = this.props;

      me.set(this.state);

      me.fetch({
        error: function (model, response, options) {
          _this.setState({ error: 'Your username and/or password are incorrect' });
        },
        success: function () {
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
        const {username,password,error} = this.state;

        return (
          <div className='container'>
            <h1><span className='icon ramen'></span>&nbsp;Welcome to the <a href='https://github.com/chadwilcomb/ramen-stack' target='_blank'>RAMEN stack</a> Web Client</h1>
            <p>The RAMEN stack is a sample project/scaffolding of a fully decoupled client-server application
            based on <strong>R</strong>eact&nbsp;+&nbsp;<strong>A</strong>mpersand&nbsp;+&nbsp;<strong>M</strong>ongoDB&nbsp;+&nbsp;
            <strong>E</strong>xpress&nbsp;+&nbsp;<strong>N</strong>ode.&nbsp;<a href='https://github.com/chadwilcomb/ramen-stack'><i className='fa fa-github'></i></a></p>
            <form name='signinForm' onSubmit={this.onSubmitForm} >
              <fieldset>
                <legend>Sign In</legend>

                <div className={error ? 'message message-error' : 'hidden'}>{error}</div>

                <div className='form-element'>
                  <label htmlFor='inputUsername'>Username</label>
                  <input id='inputUsername' onChange={this.onUsernameChange} name='inputUsername' placeholder='Enter username' className='form-input' type='text' value={username} required/>
                </div>

                <div className='form-element'>
                  <label htmlFor='inputPassword'>Password</label>
                  <input id='inputPassword' onChange={this.onPasswordChange} name='inputPassword' placeholder='Enter password' className='form-input' type='password'  value={password} required/>
                </div>

                <button type='submit' className='button button-primary'>Sign in</button>
                <br/>
                <br/>
                <a href='/register'>Register user</a>
              </fieldset>
            </form>
          </div>
        )
    }
});
