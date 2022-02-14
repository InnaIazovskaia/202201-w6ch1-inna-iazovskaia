import actionsTypes from "../actions/actionsTypes";

const tasksReducer = (tasks = [], action = {}) => {
  let newTasks;

  switch (action.type) {
    case actionsTypes.loadTasksList:
      newTasks = [...action.tasks];
      break;
    default:
      newTasks = [...tasks];
  }

  return newTasks;
};

export default tasksReducer;
