import React from 'react';
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
