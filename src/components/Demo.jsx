import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Demo({click, wrapper, label, id, length, decrement, increment, text}) {
    return (
        <Stack className={wrapper}>
          <Typography variant='subtitle1' id={label}>{text}</Typography>
          <Stack direction='row' alignItems='center' spacing={1} className="controls"> 
            <Button className='increment' onClick={click} id={decrement} size='small' color='secondary' children='Down'/>
            <div id={id}>{length}</div>
            <Button className='decrement' onClick={click} id={increment} size='small' color='secondary' children='Up' />
          </Stack>
        </Stack>
    )
}

