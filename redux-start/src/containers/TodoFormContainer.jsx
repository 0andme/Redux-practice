import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoForm from "../components/TodoForm";

function TodoFormContainer() {
  const dispatch = useDispatch();
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
export default TodoFormContainer;
