# Basic Usage

```js

import reduxActionTransform from "redux-action-transform";

const store = createStore( reducer ,applyMiddleware(reduxActionTransform [,...]));

```

- result

  dispatch('xxx',arg) => dispatch({type:'xxx',params:arg})
