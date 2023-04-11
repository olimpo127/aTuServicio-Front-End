import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect} from "react";
import Portafolio from "../components/Portafolio";
import Services from "../components/Services";



const Home = () => {
const [feeds, setFeeds]=useState([]);


  const getFeedHome = () => {
      fetch(`http://localhost:5000/services`)
          .then(res => res.json())
          .then(data => setFeeds(data))
          .catch(err => console.error(err));
      }
      
      
      useEffect(() => {
          getFeedHome();
          
      }, [])


  return (
    <>
      <section className="mb-5" id="hero">
        <div class=" hero hero-container">
          <h1 className="display-1">Bienvenido a ATuServicio</h1>
          <h2>
            Aqui encontraras gran variedad de oferta de servicios y no solo eso!
            Tambien podras publicarte!
          </h2>
          <Link to="/signup" class="btn-get-started scrollto">
            <h3> Sing Up</h3>
          </Link>
        </div>
      </section>
      <Services/>
      {feeds.map((feed) => (
            <Portafolio
              title={feed.title}
             />
            
          ))}
      
    </>
  );
};
export default Home;
