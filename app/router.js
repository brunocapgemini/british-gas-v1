import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('business');
  this.route('home-services', function() {
    this.route('boilers-and-heating', function() {
      this.route('boiler-and-heating-cover');
    });
  });
  this.route('smart-home', function() {
    this.route('technology');
    this.route('control');
    this.route('looking-after-your-home');
    this.route('hive-heating');
    this.route('smart-meters');
  });
  this.route('test1');
  this.route('test2');
});

export default Router;
