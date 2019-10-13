import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home-services/boilers-and-heating', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home-services/boilers-and-heating');
    assert.ok(route);
  });
});
