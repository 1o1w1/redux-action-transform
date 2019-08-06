export default ({ dispatch, getState }: { dispatch: any; getState: any }) => (next: any) => (
  action: any,
  ...params: any
) => {
  if (typeof action == 'string') {
    action = {
      type: action,
      params
    }
  }
  return next(action)
}
