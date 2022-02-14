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

  describe("When it receves [] as tasks and {} as action", () => {
    test("Then it should return current tasks", () => {
      const currentTasks = [
        {
          task: "comprar",
        },
        {
          task: "limpiar",
        },
      ];

      const action = {
        type: {},
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
});
