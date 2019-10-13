import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/home-services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/home-services');
    assert.ok(route);
  });
});
