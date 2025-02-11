import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemove: () => void }> = (props) => {
    const handleItemClick = () => {
        props.onRemove();
    }
    return <li className={classes.item} onClick={handleItemClick}>{props.text}</li>;
};

export default TodoItem;
