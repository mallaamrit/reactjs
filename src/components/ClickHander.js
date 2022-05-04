const ClickHandler = () => {
    const clickHandler = () =>{
        // console.log("Button Clicked")

        // displaying passed argument
        alert("HELLO")
    }
    const passingArguement = (a) =>{
        
        alert(a)
    }
    return ( 
        <div>
            <button onClick={clickHandler}>Click</button>
            
            {/* passing arguement in click event */}
            <button onClick={() =>passingArguement('Hi beautiful')}>Click 2</button>

        </div>
     );
}
 
export default ClickHandler;