import Ember from 'ember';

export default Ember.Controller.extend({
  favoriteAntwoords: Ember.inject.service(),
  actions: {
    add(){
      this.get('favoriteAntwoords').add(this.get('model'));
    }
  }
});
