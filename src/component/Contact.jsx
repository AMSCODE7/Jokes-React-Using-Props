import React from 'react'

const Contact = (Props) => {
  return (
     <div>
        <h4 className='setup'>Setup: {Props.Setup}</h4>
        <p className='punchline'>Punchline: {Props.Punchline}</p>
     </div>
    
  )
}

export default Contact