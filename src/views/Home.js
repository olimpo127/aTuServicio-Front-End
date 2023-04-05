import { useParams } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/img/logo.png";

const Home = () => {
  return (

    <>
      <section className="mb-5" id="hero">
        <div class=" hero hero-container">
          <h1>Bienvenido a ATuServicio</h1>
          <h2>
            Aqui encontraras gran variedad de oferta de servicios y no solo eso!
            Tambien podras publicarte!
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      <section id="services" class="services section-bg">
        <div class="container mt-5">
          <div class="section-title ">
            <h2 className="d-flex justify-content-center">Services</h2>
            <p>
              Magnam dolores odi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-cpu"></i>
              </div>
              <h4 class="title">
                <a href="">Carpentry</a>
              </h4>
              <p class="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <h4 class="title">
                <a href="">Mechanics</a>
              </h4>
              <p class="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-globe"></i>
              </div>
              <h4 class="title">
                <a href="">Educational</a>
              </h4>
              <p class="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-images"></i>
              </div>
              <h4 class="title">
                <a href="">Technology</a>
              </h4>
              <p class="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-sliders"></i>
              </div>
              <h4 class="title">
                <a href="">Gardening</a>
              </h4>
              <p class="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="icon">
                <i class="bi bi-building"></i>
              </div>
              <h4 class="title">
                <a href="">Vet</a>
              </h4>
              <p class="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>

          <section id="portfolio" class="container portfolio mt-5">
            <div class="container">
              <div class="section-title d-flex justify-content-center mb-3">
                <h2>Publica como ellos</h2>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-app" class="">
                      App
                    </li>
                    <li data-filter=".filter-card" class="">
                      Card
                    </li>
                    <li data-filter=".filter-web" class="">
                      Web
                    </li>
                  </ul>
                </div>
              </div>

              <div
                class="row portfolio-container"
                
              >
                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app"
                 
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a>
                          App 1
                        </a>
                      </h3> 
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
         
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                     
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                        
                        >
                          Web 3
                        </a>
                      </h3>
                    
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app"
         
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a>
                          App 2
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
              
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                        
                        >
                          Card 2
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
                
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          
                        >
                          Web 2
                        </a>
                      </h3>
                      
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app"
           
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a >
                          App 3
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
                
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          
                        >
                          Card 1
                        </a>
                      </h3>
                      
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
        
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          
                        >
                          Card 3
                        </a>
                      </h3>
                     
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
              
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                         
                        >
                          Web 1
                        </a>
                      </h3>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer id="footer">
    <div class="container">
      <div class="copyright">
        © Copyright <strong><span>ATuServicio</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="http://localhost:3000//">ATuServicio</a>
      </div>
    </div>
  </footer>
    </>
  );
};
export default Home;
