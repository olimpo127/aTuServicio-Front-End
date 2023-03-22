import './App.css';
import injectContext from './store/context';
import Narv from './components/Narv';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
    <Narv/>

    <Register/>
    <p>Test dede rama ojeda</p>
    
    </>
    
    
  );
}

export default injectContext (App);