import Ember from 'ember';

export default Ember.Component.extend({
  antwoordAuthor: Ember.computed('antwoord.firstname', 'antwoord.lastname', function(){
    return this.get('antwoord.firstname') + ' ' + this.get('antwoord.lastname');
  })
});
