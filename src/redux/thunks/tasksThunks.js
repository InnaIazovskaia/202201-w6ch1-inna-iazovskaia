import { loadTasksListAction } from "../actions/actionsCreators";

export const loadTasksListThunk = async (dispatch) => {
  const responce = await fetch(process.env.REACT_APP_LOCALAPI);
  const tasks = await responce.json();
  dispatch(loadTasksListAction(tasks));
};
