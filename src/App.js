import './App.css';
import ClickHandler from './components/ClickHander';
import UserGreeting from './components/Conditional';
import Greet from './components/Greet';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import ListRendering from './components/ListRendering';

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
       {/* <UserGreeting /> */}
       <ListRendering />

    </div>
  );
}

export default App;
