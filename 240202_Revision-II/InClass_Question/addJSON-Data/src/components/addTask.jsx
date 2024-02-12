import { useState } from 'react'

function AddTask({ addDataUI }) {
    const [formState, setFormState] = useState({
        id: "",
        task: "",
        isCompleted: false,
        assignee: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        if (formState.id.trim() !== "" && formState.task.trim() !== "" && formState.assignee.trim() !== "") {
            addDataUI(formState)
            setFormState({
                id: "",
                task: "",
                isCompleted: false,
                assignee: ""
            })
        }
    }
    function handleClick(event) {
        const { name, value, type, checked } = event.target;

        const newValue = type == 'checkbox' ? checked : value;
        const newTask = {
            ...formState, [name]: newValue
        }
        setFormState(newTask)
    }
    return (

        <div>
            <input type="number" name='id' onChange={handleClick} />
            <input type="text" placeholder='Enter task' name='task' onChange={handleClick} />
            <br />
            <label htmlFor="">
                is Completed :
                <input type="checkbox" name='isCompleted' onChange={handleClick} />
            </label>
            <br />
            <select name="assignee" id="" onChange={handleClick} >
                <option value="">Select Assignee</option>
                <option value="Saurav">Saurav</option>
                <option value="Gaurav">Gaurav</option>
                <option value="Piyush">Piyush</option>
            </select>
            <br />
            <button type='submit' onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default AddTask;