import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<Todo> = (props) => {
    return <li className={classes.item}>{props.title}</li>;
};

export default TodoItem;
