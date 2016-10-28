import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    delete(inquiry) {
      if (confirm('Do You Truly Wish To Terminate This Inquiry Into The Void???')) {
        this.sendAction('destroyInquiry', inquiry);
      }
    },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
