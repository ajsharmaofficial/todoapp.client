import React from 'react'
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';

function TodoItem({ tasks }) {
    console.log(tasks);
    return tasks.map((task, index) => (
        <React.Fragment>
            <ListGroup.Item key={task.taskId}
                variant={(task.taskStatus == "PENDING") ? "primary" : "success"}>
                {task.title} <Badge bg="info">{task.taskStatus}</Badge>
            </ListGroup.Item>
        </React.Fragment>

    )
    );
}

export default TodoItem
