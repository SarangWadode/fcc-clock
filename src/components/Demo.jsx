import React from 'react'

export default function Demo({click, wrapper, label, id, length, decrement, increment, text}) {
    return (
        <div className={wrapper}>
          <div id={label}>{text}</div>
          <div className="controls"> 
            <button className='increment' onClick={click} id={decrement}>down</button>
            <div id={id}>{length}</div>
            <button className='decrement' onClick={click} id={increment}>up</button>
          </div>
        </div>
    )
}

