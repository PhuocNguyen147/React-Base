import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/Mycomponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Phuoc Huu</div>
      <MyComponent></MyComponent>
    </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Phuoc Nguyen
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;
