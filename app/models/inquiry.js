import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  question: DS.attr(),
  author: DS.attr(),
  system: DS.attr(),
  notes: DS.attr(),
  antwoords: DS.hasMany('antwoord', { async: true })
});
