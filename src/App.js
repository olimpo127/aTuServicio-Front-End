import './App.css';
import injectContext from './store/context';
import Narv from './components/Narv';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Signup from "./views/Register-login";
import Service from "./views/Search-service";
import Detail from "./views/Service-creation";

import Feeds from './views/Feeds';
import DetailFeed from './views/DetailFeed';




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
        <Route path = "/feed" element = {<Feeds/>}/>
        <Route path="/:id" element={<DetailFeed/>} />
      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default injectContext (App);