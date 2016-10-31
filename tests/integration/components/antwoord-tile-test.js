import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('antwoord-tile', 'Integration | Component | antwoord tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{antwoord-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#antwoord-tile}}
      template block text
    {{/antwoord-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
