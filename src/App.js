import './App.css';
import ClickHandler from './components/ClickHander';
import UserGreeting from './components/Conditional';
import Greet from './components/Greet';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     {/* <Greet name='Amrit' heroName='Superman' > */}
       {/* passing dynamic html contents */}
       {/* <button>Action</button>
       </Greet> */}

       {/* <Message /> */}
       {/* <ClickHandler /> */}
       {/* <ParentComponent /> */}
       <UserGreeting />

    </div>
  );
}

export default App;
