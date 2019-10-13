import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | smart-home/smart-meters', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:smart-home/smart-meters');
    assert.ok(route);
  });
});
