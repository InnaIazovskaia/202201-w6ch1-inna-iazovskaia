import { loadTasksListThunk } from "./tasksThunks";

describe("Given a loadTasksListThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadTasksListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
