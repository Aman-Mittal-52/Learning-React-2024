import axios from "axios";
import { useState } from "react";

function TodoInput({ handlePost, setTodo }) {


    return (
        <div>

            <input type="text" data-testid="todo-input" onChange={(e) => { setTodo(e.target.value) }} />
            <button data-testid="add-button" onClick={handlePost}>Add Todo</button>
        </div>
    )
}

export default TodoInput;