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
    
    </>
    
    
  );
}

export default injectContext (App);