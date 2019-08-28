const snakeCaseToCamelCase = require('@fippli/snake-case-to-camel-case');
const newAction = require('./newAction');

/**
 * Creates an object with all actions automatically
 * @param {object} actions - Object that stores all actions
 * @param {[string]} actionType - [ACTION_TYPE_1, ACTION_TYPE_2, ...]
 * @returns {object} - Returns {
 *  actionType1: (payload) => ({type: 'ACTION_TYPE_1', payload}),
 *  actionType2: (payload) => ({type: 'ACTION_TYPE_2', payload}),
 * ...
 * }
 */
const actionCreator = (actions, actionType) => ({
  ...actions,
  [snakeCaseToCamelCase(actionType)]: newAction(actionType),
});

const actions = actionTypes => Object.freeze(actionTypes.reduce(actionCreator, {}));

module.exports = actions;
