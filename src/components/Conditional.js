const UserGreeting = () => {
    const isLoggedIn = true
    return ( 
        <div>Welcome {isLoggedIn ? 'Amrit' : 'Guest'}</div>
     );
}
 
export default UserGreeting;