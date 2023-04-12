import './App.css';
import injectContext from './store/context';
import Narv from './components/Narv';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Signup from "./views/Register-login";
import Service from "./views/Search-service";
import Detail from "./views/Service-creation";
import Footer from './components/Footer';

import Feeds from './views/Feeds';
import DetailFeed from './views/DetailFeed';
import { useContext } from "react";
import { Context } from "./store/context"




function App() {
  const { store, actions } = useContext(Context);
  const autToken = !!store.token
  console.log(autToken)
  const user = autToken;
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <Narv user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*         <Route path = "/profile" element ={user ? <Navigate to = "/profile"/> : <Profile/>} /> */}
          <Route path="/profile" element={user ? (<Profile/>) : (<Navigate to = "/"/>)} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/:id" element={<DetailFeed />} />
        </Routes>
=======
      <Narv user ={user}/>
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/profile" element ={user ? <Navigate to = "/"/> : <Profile/>}
        />
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/detail" element = {<Detail/>}/>
        <Route path = "/feed" element = {<Feeds/>}/>
        <Route path="/:id" element={<DetailFeed/>} />
       
      </Routes>
      <Footer/>
>>>>>>> d9fbad2bd8afe8ec6039d588ea33b18304c2fdfd
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);