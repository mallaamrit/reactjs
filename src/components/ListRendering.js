const List = () => {
    const names = ['Amrit', 'Kailash', 'Yogesh']
    return ( 
        <div>
            {/* we use map method since it is javascript expression we start with curly braces */}
            {
                
                names.map((name) => {
                    return <h2>key ={name}>{name}</h2>
                })
            }
            
        </div>
     );
}
 
export default List;