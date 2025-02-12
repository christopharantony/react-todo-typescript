import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
    const todoCtx = useContext(TodoContext);
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => (
                <TodoItem key={item?.id} text={item.title} onRemove={todoCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;
