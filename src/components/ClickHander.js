const ClickHandler = () => {
    const clickHandler = (event) =>{
        console.log("Button Clicked")

        // displaying passed argument
        alert(event)
    }
    return ( 
        <div>
            <button onClick={clickHandler}>Click</button>
            
            {/* passing arguement in click event */}
            <button onClick={() =>clickHandler('Hi beautiful')}>Click 5</button>

        </div>
     );
}
 
export default ClickHandler;