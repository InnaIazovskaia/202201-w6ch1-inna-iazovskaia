import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a TaskComponent", () => {
  describe("When it's rendered with task 'limpiar'", () => {
    test("Then it should display links with text 'limpiar' and 'X'", () => {
      const tastName = "limpiar";
      render(<Task name={tastName} />);

      const linkName = screen.getByRole("link", { name: /limpiar/i });
      const linkX = screen.getByRole("link", { name: /x/i });

      expect(linkName).toBeInTheDocument();
      expect(linkX).toBeInTheDocument();
    });
  });

  describe("When it's rendered with done task 'limpiar'", () => {
    test("Then it should render link with class done", () => {
      const done = true;
      render(<Task done={done} />);
      const expectedClass = "done";

      const link = screen.getAllByRole("link");

      expect(link[0]).toHaveClass(expectedClass);
    });
  });
});
