import { loadTasksListAction } from "./actionsCreators";

describe("Given a loadTasksListAction", () => {
  describe("When it receives tasks 'comprar' 'limpiar'", () => {
    test("Then it should retern load-tasks-list action with tasks 'comprar' and 'limpiar'", () => {
      const tasksList = [
        {
          task: "comprar",
        },
        {
          task: "limpiar",
        },
      ];
      const expectedAction = {
        type: "load-tasks-list",
        tasks: tasksList,
      };

      const action = loadTasksListAction(tasksList);

      expect(action).toEqual(expectedAction);
    });
  });
});
