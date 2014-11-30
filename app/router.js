import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.route("contact");
  this.route("courses");
  this.route("faq");
  this.route("join");
});

export default Router;