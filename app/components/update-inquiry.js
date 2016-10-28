import Ember from 'ember';

export default Ember.Component.extend({
  updateInquiryForm: false,
  actions: {
    updateInquiryForm() {
      this.set('updateInquiryForm', true);
    },
    update(inquiry) {
      var params = {
        image: this.get('image'),
        question: this.get('question'),
        author: this.get('author'),
        system: this.get('system'),
        notes: this.get('notes'),
      };
      this.set('updateInquiryForm', false);
      this.sendAction('update', inquiry, params);
    }
  }
});
