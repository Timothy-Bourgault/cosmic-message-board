import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      inquiries: this.store.findAll('inquiry'),
      antwoords: this.store.findAll('antwoord')
    });
  },
  actions: {
    saveInquiry(params) {
      var newInquiry = this.store.createRecord('inquiry', params);
      newInquiry.save();
      this.transitionTo('index');
    }
  }
});
