import { Dispatch, AnyAction, MiddlewareAPI } from 'redux'
export interface Middleware<DispatchExt = {}, S = any, D extends Dispatch = Dispatch> {
  (api: MiddlewareAPI<D, S>): (next: Dispatch<AnyAction>) => (action: any, ...arg: any) => any
}
const transform: Middleware = ({ dispatch, getState }: { dispatch: any; getState: any }) => (
  next: any
) => (action: any, params: any) => {
  if (typeof action == 'string') {
    return next({
      type: action,
      params
    })
  }
  return next(action)
}
export default transform
