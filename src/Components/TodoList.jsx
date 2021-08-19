import React, { useEffect, useState } from 'react'
import { saveTask } from '../Services/TaskService';
import TodoForm from './TodoForm'
import { getTasks } from './../Services/TaskService';
import { TaskItem } from './../Models/TaskItem';
import TodoItem from './TodoItem';
import { Row, Col, ListGroup } from 'react-bootstrap';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks().then(tasks => {
            setTasks(tasks.data);
        })
    }, []);


    const addTask = task => {
        var taskitem = new TaskItem(0, task);
        saveTask(taskitem).then(response => {
            if (response.responseStatus) {
                alert("Task Added Successfully");
                getTasks().then(tasks => {
                    setTasks(tasks.data)
                })
            }

        });
    }
    return (
        <div>
            <h1>Yangroo To-Do App</h1>
            <TodoForm onSubmit={addTask} />
            <Row>
                <Col>
                    <ListGroup>
                        {tasks.length > 0 ? <TodoItem tasks={tasks} /> : <h1>Loading</h1>}
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default TodoList;
