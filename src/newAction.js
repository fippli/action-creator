/**
 * Creates a new action function
 * @param {string} type - "ACTION_TYPE"
 * @returns {function} - Functions that creates an action
 */
const newAction = type => payload => ({
  type,
  payload,
});

module.exports = newAction;
