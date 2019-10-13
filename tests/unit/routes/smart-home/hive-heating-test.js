import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | smart-home/hive-heating', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:smart-home/hive-heating');
    assert.ok(route);
  });
});
