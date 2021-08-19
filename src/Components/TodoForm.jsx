import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('');
    return (
        <form className='todoform'>
            <input type='text'
                placeholder='What would you like to do?'
                value={input}
                name='nametodo'
                className='todoform-input'
            />
            <button className='btnAddTodo'>ADD</button>
        </form>
    )
}

export default TodoForm

