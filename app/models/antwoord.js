import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  content: DS.attr()
  inquiry: DS.belongsTo('inquiry', { async: true }),
});
