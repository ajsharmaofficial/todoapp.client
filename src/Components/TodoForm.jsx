import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleAddToDo = e => {
        e.preventDefault();
        props.onSubmit(input);
        //setting the input to blank
        setInput('');
    }

    //OnChange Handler for Input box
    const handleChange = e => {
        setInput(e.target.value);
    }
    return (
        <Row>
            <Form className='todoform' onSubmit={handleAddToDo}>
                <Col>
                    <Form.Group>
                        <Form.Control type='text'
                            placeholder='What would you like to do?'
                            value={input}
                            name='nametodo'
                            className='m-4'
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Button variant="primary" type="submit" mb={4}>
                        Add Task
                    </Button>
                </Col>
            </Form>
        </Row>
    )
}

export default TodoForm;