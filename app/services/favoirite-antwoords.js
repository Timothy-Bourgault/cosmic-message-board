import Ember from 'ember';

export default Ember.Service.extend({
  antwoords: [],
  add(antwoord){
    this.get('antwoords').pushObject(antwoord)
  },
  remove(antwoord){
    this.get('antwoords').removeObject(antwoorc)
  },
  includes(antwoord){
    return this.get('monsters').includes(antwoord)
  }
});
