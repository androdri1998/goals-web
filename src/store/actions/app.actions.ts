interface IAppActions {
  ASYNC_EXAMPLE: string;
  CHANGE_EXAMPLE: string;
}

const appActions = {
  ASYNC_EXAMPLE: '@app/ASYNC_EXAMPLE',
  CHANGE_EXAMPLE: '@app/CHANGE_EXAMPLE',
} as IAppActions;

interface IAsyncExampleActionResponse {
  type: string;
  payload: string;
}

export const asyncExampleAction = ({
  newText,
}: {
  newText: string;
}): IAsyncExampleActionResponse => ({
  type: appActions.ASYNC_EXAMPLE,
  payload: newText,
});

interface IChangeExampleActionResponse {
  type: string;
  payload: string;
}

export const changeExampleAction = (
  payload: string,
): IChangeExampleActionResponse => ({
  type: appActions.CHANGE_EXAMPLE,
  payload,
});

export default appActions;
