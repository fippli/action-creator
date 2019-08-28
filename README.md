# action-creator
Action creator for React reducer actions

## Installation
```javascript
npm install @fippli/action-creator
```

## Basic usage
```
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
