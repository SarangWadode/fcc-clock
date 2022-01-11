import React from 'react'

export default function Demo({wrapper, label, id, length, decrement, increment}) {
    return (
        <div className={wrapper}>
          <div id={label}>Break Length</div>
          <div className="controls"> 
            <button id={decrement}>up</button>
            <div id={id}>{length}</div>
            <button id={increment}>down</button>
          </div>
        </div>
    )
}

