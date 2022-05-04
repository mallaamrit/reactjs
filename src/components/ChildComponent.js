const ChildComponent = (props) => {
    return ( 
        <div>     
{/* 
            //passing paramater from child to parent */}
            <button onClick={() => props.greetHandler('child')}>Greet</button>
        </div>
     );
}
 
export default ChildComponent;