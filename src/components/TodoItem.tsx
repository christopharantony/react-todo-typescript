import Todo from "../models/todo";

const TodoItem: React.FC<Todo> = (props) => {
    return <li>{props.title}</li>;
};

export default TodoItem;
