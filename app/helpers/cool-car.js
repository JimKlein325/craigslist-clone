import Ember from 'ember';

export function coolCar(params) {
  var car = params[0];

  if(car.get('cost') >= 250) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-road"></span>');
  }
}

export default Ember.Helper.helper(coolCar);
