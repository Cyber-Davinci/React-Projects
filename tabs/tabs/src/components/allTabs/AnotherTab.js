import React from 'react'

function AnotherTab({title, body}) {
  return (
    <div className='secTab'>
        <h1>{title}</h1>
        <p> {body} </p>
    </div>
  )
}

export default AnotherTab