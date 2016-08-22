import Ember from 'ember';

export default Ember.Route.extend({
  // sortBy: ['cost:asc'],
  // sortedBikes: Ember.computed.sort('model', 'sortBy'),

  model(){
    return Ember.RSVP.hash({
      bikes: this.store.findAll('bike'),
      cars: this.store.findAll('car')
    });
    // debugger;
    // return this.store.findAll('car');
    // var bikes = this.store.findAll('bike');
    // debugger;
    // return bikes;
    // return Ember.RSVP.hash({
    //   bike:
    //   this.store.findAll('salebike');//,
      //car: this.store.findAll('car', car.car_id)
    // });
  },

  actions: {
    save(params){
      var newBike = this.store.createRecord('bike', params);
      newBike.save();
      this.transitionTo('index');
    },

    // save(params){
    //   var newCar = this.store.createRecord('car', params);
    //   newBike.save();
    //   this.transitionTo('index');
    // }
  }
});
