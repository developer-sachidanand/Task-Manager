import React from 'react'

const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} 
        onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <button style = {styleButton} onClick = {()=>onDelete(task.id)}>Delete</button>
            </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

const styleButton = {
    backgroundColor:'red',
    borderRadius:'5px',
    cursor:'pointer',
    outline:'none',
    color:'#fff',
    border:'none',
    padding:'5px 10px'
}

export default Task
