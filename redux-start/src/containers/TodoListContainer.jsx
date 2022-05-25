<<<<<<< HEAD
import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";
=======
import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
// const mapStateToProps = (state) => {
//   return { todos: state.todos };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
// const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);
>>>>>>> 74c1cf42dc38763cbaa4521b07bff1074df47099

function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos} />;
}
export default TodoListContainer;
