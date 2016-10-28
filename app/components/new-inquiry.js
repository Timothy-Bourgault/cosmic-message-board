import Ember from 'ember';

export default Ember.Component.extend({
  addNewInquiry: false,
  actions: {
    inquiryFormShow() {
      this.set('addNewInquiry', true);
    },

    saveInquiry() {
      var params = {
        image: this.get('image') ? this.get('image') : "",
        city: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : "",
        system: this.get('system') ? this.get('system') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('addNewInquiry', false);
      this.sendAction('saveInquiry', params);
      this.set('image', '');
      this.set('question', '');
      this.set('author', '');
      this.set('system', '');
      this.set('notes', '');
    }
  }
});
