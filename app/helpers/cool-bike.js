import Ember from 'ember';

export function coolBike(params/*, hash*/) {
  var bike = params[0];

  if(bike.get('cost') >= 250) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-road"></span>');
  }
}

export default Ember.Helper.helper(coolBike);
