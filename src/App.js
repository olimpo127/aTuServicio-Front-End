import './App.css';
import injectContext from './store/context';
import Narv from './components/Narv';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./views/home";
import Profile from "./views/profile";
import Signup from "./views/register-login";
import Service from "./views/search-service";
import Detail from "./views/service-creation";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Narv />
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/profile" element ={<Profile/>}/>
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/detail" element = {<Detail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default injectContext (App);