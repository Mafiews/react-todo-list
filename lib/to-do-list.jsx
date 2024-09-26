const App = () => {
  const [todos, changeTodos] = React.useState([
    { title: "Code a to-do list 📝", done: true },
    { title: "Eat breakfast 🍳", done: false },
    { title: "Do some exercise 🧗", done: false },
    { title: "Water the plants 🌱", done: true },
  ]);

  const [title, setTitle] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    const newTodo = { title, done: false };
    changeTodos([...todos, newTodo]);
  };

  const handleCheck = (index) => () => {
    changeTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (index) => () => {
    changeTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div id="app" className="container">
      <h1>To-do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            class="shadow-sm rounded px-4 py-3 mb-2 border d-flex justify-content-between"
          >
            <div class="d-flex">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={handleCheck(index)}
                class="d-flex form-check-input me-1"
              />
              <span
                class={
                  todo.done ? "text-decoration-line-through" : "text-secondary"
                }
              >
                {todo.title}
              </span>
            </div>
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={handleDelete(index)}
              ></button>
          </li>
        ))}
      </ul>

      <form>
        <div class="input-group mb-3 mt-5">
          <input
            type="text"
            id="todoTitle"
            value={title}
            onChange={handleTitleChange}
            class="form-control p-2"
            placeholder="Your task goes here"
          />
          <button type="button" class="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
