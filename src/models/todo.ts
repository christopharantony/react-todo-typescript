class Todo {
    id: string;
    title: string;

    constructor(todoTile: string) {
        this.id = new Date().getTime().toString();
        this.title = todoTile;
    }
}

export default Todo;