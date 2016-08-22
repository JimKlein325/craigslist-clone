import Ember from 'ember';

// export default Ember.Route.extend({
//   model(params) {
//     return this.store.findRecord('bike', params.bike_id);
//   },

export default Ember.Route.extend({
    model(params){
      return Ember.RSVP.hash({
        bike: this.store.findRecord('bike', params.bike_id),
      });
    },



  actions: {
    update(bike, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          bike.set(key,params[key]);
        }
      });
      bike.save();
      this.transitionTo('index');
    },
    destroyBike(bike) {
      bike.destroyRecord();
      this.transitionTo('index');
    },
    saveSalebike(params) {
      var newSalebike = this.store.createRecord('salebike', params);
      var bike = params.bike;
      bike.get('salebikes').addObject(newSalebike);
      newSalebike.save().then(function(){
        return bike.save();
      });
    }
  }
});
