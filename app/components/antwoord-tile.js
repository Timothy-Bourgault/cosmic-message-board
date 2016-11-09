import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAntwoords: Ember.inject.service(),
  antwoordAuthor: Ember.computed('antwoord.firstname', 'antwoord.lastname', function(){
    return this.get('antwoord.firstname') + ' ' + this.get('antwoord.lastname');
  }),
  actions: {
    add(antwoord) {
      this.get('favoriteAntwoords').add(antwoord);
    }
  }
});
