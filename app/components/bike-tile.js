import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['cost:asc'],
    sortedBikes: Ember.computed.sort('bike', 'sortBy'),

    firstThreBikes: Ember.computed.filter('sortedBikes', function(bike, index) {
        return (index < 3);
    })
});
