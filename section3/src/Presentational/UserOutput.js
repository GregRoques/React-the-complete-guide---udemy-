import React from 'react';
import './Users.css'

const UserOutput = (props)=>{
    return(
        <div className="paragraphs">
            <p>Their early work was a little too new wave for my taste. But when Sports came out in '83, I think they really came into their own, commercially and artistically. The whole album has a clear, crisp sound, and a new sheen of consummate professionalism that really gives the songs a big boost. He's been compared to Elvis Costello, but I think Huey has a far more bitter, cynical sense of humor.</p>
            <p>In '87, Huey released this; Fore!, their most accomplished album. I think their undisputed masterpiece is "Hip To Be Square". A song so catchy, most people probably don't listen to the lyrics. But they should, because it's not just about the pleasures of conformity and the importance of trends. It's also a personal statement about the band itself. <span className='userName'>Hey {props.name}!</span> </p>
        </div>
    )
}

export default UserOutput;

