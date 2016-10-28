import Ember from 'ember';

export default Ember.Component.extend({
  addNewInquiry: false,
  actions: {
    inquiryFormShow() {
      this.set('addNewInquiry', true);
    }
  }
});
