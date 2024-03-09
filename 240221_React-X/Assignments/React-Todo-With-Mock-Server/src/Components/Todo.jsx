import axios from 'axios'
import TodoInput from './TodoInput';
import { useEffect, useState } from 'react';

const Todos = () => {

  const [todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([]);

  const [newtodo, setNewTodo] = useState("")
  async function fetchTodos() {
    try {
      const data = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      setTodos(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handlePost = async () => {
    try {
      const data = await axios({
        method: 'post',
        baseURL: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
        url: '/todos',
        data: {
          title: todo,
          status: false
        }
      })

      setNewTodo(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { fetchTodos() }, [newtodo])

  return (
    <div>
      <h1>ToDo List</h1>
      {/* add TodoInput component here */}
      <TodoInput handlePost={handlePost} setTodo={setTodo}/>
      {/* map through the todos array and display the tasks */}
      <div data-testid="todos-wrapper">
        {Todos.map((todo, i) => (
          <p key={i}>{todo.title} : {todo.status?"True":"False"}</p>
        ))}
      </div>
    </div>
  );
};

export default Todos;
