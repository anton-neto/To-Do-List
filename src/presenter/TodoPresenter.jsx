class TodoPresenter {
  constructor(setTodos) {
    this.setTodos = setTodos;
  }

  loadTodos() {
    
  }

  addItem = (todo) => {
    this.setTodos(prev => [...prev, { ...todo, completed: false, id: Date.now() }]);
  };

  deleteItem = (id) => {
    this.setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  editItem = (id, newText) => {
    this.setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  toggleComplete = (id) => {
    this.setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };
  
}

export default TodoPresenter;
