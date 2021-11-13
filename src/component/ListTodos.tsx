import classes from "./ListTodos.module.css";

const ListTodos: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.removeTodo}>
      {props.text}
    </li>
  );
};
export default ListTodos;
