import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home-services/boilers-and-heating/boiler-and-heating-cover', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home-services/boilers-and-heating/boiler-and-heating-cover');
    assert.ok(route);
  });
});
