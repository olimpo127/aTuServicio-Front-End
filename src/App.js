import './App.css';
import injectContext from './store/context';
import Narv from './components/Narv';

function App() {
  return (
    <>
    <Narv/>
    <p>Test</p>
    <p>prueba</p>
    <p>prueba visualcode</p>
    
    </>
    
    
  );
}

export default injectContext (App);