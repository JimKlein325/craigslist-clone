import Ember from 'ember';

export default Ember.Component.extend({
  updateBikeForm: false,
  actions: {
    delete(bike){
      this.sendAction('destroyBike', bike);
  },
  update(bike, params) {
    this.sendAction('update', bike, params);
    }
  }
});
