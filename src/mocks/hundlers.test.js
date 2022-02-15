describe("Given a mock service worker installation", () => {
  describe("When it sent to 'https://todoapiinna.herokuapp.com/todo/'", () => {
    test("The request should be intercepted", async () => {
      const responseExpected = [
        {
          id: 1,
          task: "descansar",
        },
        {
          id: 2,
          task: "dormir",
        },
      ];

      const response = await fetch("https://todoapiinna.herokuapp.com/todo/");
      const jsonTasks = await response.json();

      expect(jsonTasks).toEqual(responseExpected);
    });
  });
});
