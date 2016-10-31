import Ember from 'ember';

export default Ember.Component.extend({
  addNewAntwoord: false,
  actions: {
    antwoordFormShow() {
      this.set('addNewAntwoord', true);
    },

    saveAntwoord() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        rating: this.get('rating') ? this.get('rating') : "",
        content: this.get('content') ? this.get('content') : "",
      };
      this.set('addNewAntwoord', false);
      this.sendAction('saveAntwoord', params);
      this.set('author', '');
      this.set('rating', '');
      this.set('content', '');
    }
  }
});
