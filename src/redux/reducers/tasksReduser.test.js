import tasksReducer from "./tasksReducer";

describe("Given tasksReducer function", () => {
  describe("When it receives tasks 'comprar' 'limpiar' and loadTasksList action", () => {
    test("Then it should return tasks 'comprar' 'limpiar'", () => {
      const currentTasks = [];

      const action = {
        type: "load-tasks-list",
        tasks: [
          {
            task: "comprar",
          },
          {
            task: "limpiar",
          },
        ],
      };

      const expectedTasks = [
        {
          task: "comprar",
        },
        {
          task: "limpiar",
        },
      ];

      const tasksList = tasksReducer(currentTasks, action);

      expect(tasksList).toEqual(expectedTasks);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return []", () => {
      const currentTasks = [
        {
          task: "comprar",
        },
        {
          task: "limpiar",
        },
      ];

      const action = {
        type: "jkjfk",
        tasks: [],
      };

      const expectedTasks = [
        {
          task: "comprar",
        },
        {
          task: "limpiar",
        },
      ];

      const tasksList = tasksReducer(currentTasks, action);

      expect(tasksList).toEqual(expectedTasks);
    });
  });

  describe("When it doesn't receive tasks and action", () => {
    test("Then it should return []", () => {
      const result = tasksReducer();

      expect(result).toHaveLength(0);
    });
  });
});
