import React, {useState, useEffect} from 'react';
import './Todoapp.css';


const Todoapp = () => {
    const [input, setInput] = useState('');
    const [lists, setLists] = useState(() =>{
        const storedTodos = localStorage.getItem('lists');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect (() => {
        localStorage.setItem('lists', JSON.stringify(lists));
    }, [lists]);

    // submit button
    //it basically about setting the about-to-be list to an array of destructured lists and the input 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() !== '') {
            setLists([...lists, input])
            setInput('');
        }
    }

    // Delete button 
    // it just basically declaring a variable and filtering the list and refusing index to be index
    // the underscore(_) could be something else

    const handleDelete = (index) => {
        const filteredList = lists.filter((_, i) => i !== index);
        setLists(filteredList)
    }
  return (
    <div className='main container'>
        <form onSubmit={handleSubmit}>
            <h1 className='header'>Todo App</h1>
            <div className='info'>Using React(useState)and localStorage</div>
            <br/>
            <input type="text" 
                placeholder='Enter New Todo Here...'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='input'
                maxLength={20}
            />
            <br />
            <button className='btn'>SUBMIT</button>
        </form>
        <div className='todo-output'>
            <p className='recent'>Recent Todos</p>
            {lists.length === 0 && 'No Todos Available...'}
            {lists.map((list, index) => (
                <li key={index} className='list'>
                    <span className='span-list'>{list}</span>
                    <button className='delete-btn' onClick={() => handleDelete(index)}>
                        X
                    </button>
                </li>
            ))}
        </div>
    </div>
  )
}
/// what i learn from this project is 
// 
export default Todoapp