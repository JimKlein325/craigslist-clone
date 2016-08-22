import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bike', {path: '/bike/:bike_id'});
  this.route('car', {path: '/car/:car_id'});
});

export default Router;
