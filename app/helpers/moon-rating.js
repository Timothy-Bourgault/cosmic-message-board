import Ember from 'ember';

export function moonRating(params) {
  var params = parseInt(params);
  var moons = "<p>";
  if (params === 1) {
    moons == '🌚';
  }
  else if (params === 2) {
    moons == '🌚 🌒';
  }
  else if (params === 3) {
    moons == '🌚 🌒 🌓';
  }
  else if (params === 4) {
    moons == '🌚 🌒 🌓 🌔';
  }
  else if (params === 5) {
    moons == '🌚 🌒 🌓 🌔 🌝';
  }
  else if (params === 6) {
    moons == '🌚 🌒 🌓 🌔 🌝 🌖';
  }
  else if (params === 7) {
    moons == '🌚 🌒 🌓 🌔 🌝 🌖 🌗';
  }
  else if (params === 8) {
    moons == '🌚 🌒 🌓 🌔 🌝 🌖 🌗 🌘';
  }
  else (params === 9) {
    moons == '🌚 🌒 🌓 🌔 🌝 🌖 🌗 🌘 🌚';
  }
  moons += '</p>';
  return Ember.String.htmlSafe(moons);
}

export default Ember.Helper.helper(moonRating);
