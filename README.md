# action-creator
Action creator for React reducer actions
Takes an array of action types and creates an object with action functions.
```javascript
import actions from '@fippli/action-creator';
actions(['ACTION_TYPE']);
// =>
// {
//   actionType: (payload) => {
//     type: 'ACTION_TYPE',
//     payload,
//   }
// }
```

## Installation
```javascript
npm install @fippli/action-creator
```

## Basic usage
```javascript
import actions from '@fippli/action-creator';

const ACTION_TYPE = 'ACTION_TYPE';

const actionTypes = [
  ACTION_TYPE,
  // ... some more action types
];

const allActions = actions(actionTypes);

const payload = 'some payload';

allActions.actionType(payload); 
// => {
//  type: 'ACTION_TYPE',
//  payload: 'some payload',
// }
```
