import app from 'ampersand-app';

export default {
  ajaxConfig () {
    return {
      headers: app.me.authHeader
    }
  }
}
