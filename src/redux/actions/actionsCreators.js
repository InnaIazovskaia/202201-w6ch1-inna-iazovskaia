import actionsTypes from "./actionsTypes";

export const loadTasksListAction = (tasks) => ({
  type: actionsTypes.loadTasksList,
  tasks,
});
