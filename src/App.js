import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Task from "./components/Task/Task";

import { loadTasksListThunk } from "./redux/thunks/tasksThunks";

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: yellow;
`;

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksListThunk);
  }, [dispatch]);

  return (
    <Container>
      <h1>List of Tasks</h1>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} name={task.task} />
        ))}
      </ul>
    </Container>
  );
}

export default App;
