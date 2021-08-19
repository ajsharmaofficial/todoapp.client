import React from 'react'

function TodoItem({ tasks }) {
    console.log(tasks);
    return tasks.map((task, index) => (

        <div key={task.taskId}>
            {task.title}
        </div>
    )
    );
}

export default TodoItem
