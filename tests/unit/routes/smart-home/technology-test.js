import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | smart-home/technology', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:smart-home/technology');
    assert.ok(route);
  });
});
