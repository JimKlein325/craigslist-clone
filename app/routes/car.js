import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('car', params.car_id);
  },
// })
// export default Ember.Route.extend({
//   model(params){
//     return Ember.RSVP.hash({
//       car: this.store.findRecord('car', params.car_id),
//     });
//   },

  actions: {
    update(car, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          car.set(key,params[key]);
        }
      });
      car.save();
      this.transitionTo('index');
    },
    destroyCar(car) {
      car.destroyRecord();
      this.transitionTo('index');
    },
    saveSalecar(params) {
      var newSalecar = this.store.createRecord('salecar', params);
      var car = params.car;
      car.get('salecars').addObject(newSalecar);
      newSalecar.save().then(function(){
        return car.save();
      });
    }
  }
});
