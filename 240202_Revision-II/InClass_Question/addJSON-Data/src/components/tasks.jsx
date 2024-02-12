
function Task({id, task, isCompleted, assignee}){
    return(
      <div className='data'>
        <p><b>ID :</b> {id}</p>
        <p><b>Task :</b> {task}</p>
        <p>Completed : <b>{isCompleted.toString()}</b></p>
        <p>Name :<b>{assignee}</b></p>
      </div>
    )
  }

  export default Task;