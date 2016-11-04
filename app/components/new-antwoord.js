import Ember from 'ember';

export default Ember.Component.extend({
  rating: 5,
  addNewAntwoord: false,
  actions: {
    antwoordFormShow() {
      this.set('addNewAntwoord', true);
    },
    saveAntwoord(inquiry) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        rating: this.get('rating') ? this.get('rating') : "",
        inquiry: inquiry
      };
      this.set('rating', 5);
      this.set('addNewAntwoord', false);
      this.sendAction('saveAntwoord', params);
      this.set('author', '');
      this.set('content', '');
    },
    saveRating(value) {
      this.set('rating', value);
    }
  }
});
