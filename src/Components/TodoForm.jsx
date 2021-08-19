import React, { useState } from 'react'

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
        <form className='todoform' onSubmit={handleAddToDo}>
            <input type='text'
                placeholder='What would you like to do?'
                value={input}
                name='nametodo'
                className='todoform-input'
                onChange={handleChange}
            />
            <button className='btnAddTodo'>ADD</button>
        </form>
    )
}

export default TodoForm;