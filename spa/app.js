import app from 'ampersand-app';
import icons from '../node_modules/font-awesome/css/font-awesome.css';
import styles from './styles/main.styl';
import Router from './router';
import Me from './models/me';
import config from './config';

require("file?name=favicon.ico!./images/favicon/favicon.ico");

//expose 'app' to browser console for debugging
window.app = app;

app.extend({
  init () {
    this.me = new Me();
    this.router = new Router();
    this.router.history.start();
  }
});

app.apiUrl = config.apiUrl; //'http://localhost:8080';

app.init();
