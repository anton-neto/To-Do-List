export default class TodoModel {
  constructor() {
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text) {
    const newTodo = { id: Date.now(), text };
    this.todos.push(newTodo);
    return this.todos;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }

  editTodo(id, newText) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].text = newText;
    }
    return this.todos;
  }
}
