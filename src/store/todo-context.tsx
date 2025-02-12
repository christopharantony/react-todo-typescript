import React, { PropsWithChildren } from "react";
import Todo from "../models/todo";

type TodoContextType = {
    items: Todo[],
    addTodo: (todoText: string) => void,
    removeTodo: (todoId: string) => void
}

export const TodoContext = React.createContext<TodoContextType>({
    items: [],
    addTodo: () => { },
    removeTodo: () => { }
})

const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        setTodos(prevTodos => prevTodos.concat(new Todo(todoText)));
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }

    const contextValue: TodoContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
    )
}

export default TodoContextProvider;