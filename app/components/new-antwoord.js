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
        firstname: this.get('firstname') ? this.get('firstname') : "",
        lastname: this.get('lastname') ? this.get('lastname') : "",
        content: this.get('content') ? this.get('content') : "",
        rating: this.get('rating') ? this.get('rating') : "",
        inquiry: this.get('inquiry')
      };
      this.set('rating', 5);
      this.set('addNewAntwoord', false);
      this.sendAction('saveAntwoord', params);
      this.set('firstname', '');
      this.set('lastname', '');
      this.set('content', '');
    },
    saveRating(value) {
      this.set('rating', value);
    }
  }
});
