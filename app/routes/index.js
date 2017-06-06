import Route from 'ember-route';
import get from 'ember-metal/get';
import injectService from 'ember-service/inject';

export default Route.extend({
  notifications: injectService('notification-messages'),

  setupController() {
    get(this, 'notifications').success('Such win, much success');
  }
});
