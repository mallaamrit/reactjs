import { useState } from "react";

// using state example and click event
const Message = () => {
    const [message, setMessage]= useState('Welcome Visitors')
    return ( 
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank You for subscribing')}>Subscribe</button>
        </div>
        
     );
}
 
export default Message;