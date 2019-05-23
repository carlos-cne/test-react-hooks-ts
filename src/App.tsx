import React, { useEffect, useState } from "react";

interface Todo {
  id?: number;
  name: string;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo>({ name: "" });
  const [todos, setTodos] = useState<Todo[]>([]);

  async function addTodo(e: any) {
    console.log(todos);
    e.preventDefault();
    await setTodos([...todos, { ...todo, id: Math.random() }]);
    localStorage.setItem("@Todos", JSON.stringify(todos));
    setTodo({ name: "" });
    console.log(todos);
  }

  function removeTodo(idx: number | undefined) {
    idx &&
      setTodos(todos.filter(item => item.id !== idx)) &&
      localStorage.setItem("@Todos", JSON.stringify(todos));
  }

  useEffect(() => {
    const data: any = localStorage.getItem("@Todos");

    setTodos(JSON.parse(data));
  }, []);

  return (
    <div className="App">
      <h1>Teste usando o React Hooks com TypeScript</h1>
      <h4>Todos</h4>
      <form onSubmit={e => addTodo(e)}>
        <input
          id="inputTodo"
          type="text"
          placeholder="Digite o Todo"
          value={todo.name}
          onChange={e => setTodo({ name: e.target.value })}
        />
        <button name="buttonSubmitTodo" type="submit">
          Adiconar
        </button>
      </form>
      <div>
        <ul>
          {todos.map((item: Todo) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                name="buttonRemoveTodo"
                onClick={() => removeTodo(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
