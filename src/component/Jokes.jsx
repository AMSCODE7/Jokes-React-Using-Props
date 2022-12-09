import React from 'react'
import Contact from './Contact'
import "./jokes.css"

const Jokes = () => {
  return (
    <>
    <div className='joke-header'><h2>Jokes of the day</h2></div>
    <div className='joke-1'>
    <Contact
    Setup  = " I got my daughter a fridge for her birthday."
    Punchline = " I can't wait to see her face light up when she opens it."
    
    />
</div>
<div className='joke-1'>
    <Contact
    Setup  = "Setup: How did the hacker escape the police?"
    Punchline = " He just ransomware!"
    
    />
</div>
<div className='joke-1'>
    <Contact
    Setup  = " Why don't pirates travel on mountain roads?"
    Punchline = " Scurvy."
   
    />
</div>

<div className='joke-1'>
    <Contact
    Setup  = " Why do bees stay in the hive in the winter?"
    Punchline = "Swarm."
    
    />
</div>
<div className='joke-1'>
    <Contact
    Setup  = " What's the best thing about Switzerland?"
    Punchline = "I don't know, but the flag is a big plus!"
    />
</div>
</>
  )
}

export default Jokes