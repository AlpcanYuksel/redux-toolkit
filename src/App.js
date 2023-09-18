import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementCustom } from './redux/features/counter/counterSlice';
import { useEffect } from 'react';
import { getCountry } from './redux/features/country/countrySlice';

function App() {

  const dispatch = useDispatch();

  const {counter} = useSelector(state => state.counter)

  
  
  useEffect(() => {
    dispatch(getCountry())
  },[])

  const {country,loading} = useSelector(state => state.country)

  
  console.log(country);
  console.log(loading);

  
  return (
    
    <div className="App">
      <button aria-label="Increment value" onClick={() => dispatch(decrement())}>Azalt</button>
      <span style={{padding:20}}>{counter}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(increment())}>Arttır</button>
      <button aria-label="Decrement value" onClick={() => dispatch(incrementCustom(10))}>Custom</button>
    </div>
  );
}

export default App;
