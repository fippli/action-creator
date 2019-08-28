const newAction = require('./src/newAction');

/**
 * New action
 */
const ACTION_TYPE = 'ACTION_TYPE';

const payload = 'payload';

const action = {
  type: ACTION_TYPE,
  payload,
};

test('Create a new action', () => {
  expect(newAction(ACTION_TYPE)(payload)).toEqual(action)
});