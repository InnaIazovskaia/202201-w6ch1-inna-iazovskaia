import styled from "styled-components";

const StyledTask = styled.li`
  a {
    text-decoration: none;
  }
  .done {
    text-decoration: line-through;
  }
`;

const Task = ({ name, done }) => {
  return (
    <StyledTask>
      <a className={done ? "done" : ""} href="toggle-task">
        {name}
      </a>{" "}
      <a href="delete">X</a>
    </StyledTask>
  );
};

export default Task;
