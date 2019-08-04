# basic usage

```js


import reduxActionTransform from "redux-action-transform";

const store = createStore( reducer ,applyMiddleware(reduxActionTransform [,...]));


```

- result

dispatch('xxx',...params) => dispatch({type:'xxx',params:params})
