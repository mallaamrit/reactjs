import './App.css';
import ClickHandler from './components/ClickHander';
import Greet from './components/Greet';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
     {/* <Greet name='Amrit' heroName='Superman' > */}
       {/* passing dynamic html contents */}
       {/* <button>Action</button>
       </Greet> */}

       {/* <Message /> */}
       <ClickHandler />

    </div>
  );
}

export default App;
