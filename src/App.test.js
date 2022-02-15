import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain heading level1 with text 'List of Tasks' and heading level2 with text 'Tasks:'", () => {
      renderWithProviders(<App />);

      const title1 = screen.getByRole("heading", {
        level: 1,
        name: "List of Tasks",
      });
      const title2 = screen.getByRole("heading", { level: 2, name: "Tasks:" });

      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
    });
  });

  describe("When it receives 'descansar' and 'dormir' tasks", () => {
    test("Then it should display 'descansar' and 'dormir'", async () => {
      renderWithProviders(<App />);

      const expectedTaskOne = await screen.findByText("descansar");
      const expectedTaskTwo = await screen.findByText("dormir");

      expect(expectedTaskOne).toBeInTheDocument();
      expect(expectedTaskTwo).toBeInTheDocument();
    });
  });
});
