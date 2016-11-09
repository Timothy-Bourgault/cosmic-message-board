import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  inquiry: DS.belongsTo('inquiry', { async: true }),
});
