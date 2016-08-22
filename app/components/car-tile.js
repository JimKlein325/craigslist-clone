import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['cost:asc'],
    sortedCars: Ember.computed.sort('car', 'sortBy'),

    firstThreCars: Ember.computed.filter('sortedCars', function(car, index) {
        return (index < 3);
    })
});
