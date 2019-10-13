import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | smart-home/looking-after-your-home', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:smart-home/looking-after-your-home');
    assert.ok(route);
  });
});
