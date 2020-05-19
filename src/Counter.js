import React, { useState } from 'react';
import Message from './Message'
import './index.css';

const Counter = () => {
    // Hook state to
    // [referencia al dato, funcion setter] = parametro como valor incial
    const [counter, setCounter] = useState(0);
    const updateCounter = () => setCounter(counter + 5);

    return ( <div style={{ padding: 20 }}>
                <h1>Developed by Karqui Yamil</h1>
                <p>Result: {counter}</p>
                <button className="ui button primary" onClick={updateCounter} >
                    <Message text="Add 5"/>
                </button>
            </div>);
}

export default Counter;