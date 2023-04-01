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
                      src="https://www.nosequeestudiar.net/site/assets/files/55133/carpintero-trabajando.616x0-is.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="https://www.nosequeestudiar.net/site/assets/files/55133/carpintero-trabajando.616x0-is.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 1"
                        >
                          App 1
                        </a>
                      </h3>
                      <div>
                        <a
                          href="https://www.nosequeestudiar.net/site/assets/files/55133/carpintero-trabajando.616x0-is.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 1"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
         
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://images.evisos.cl/2015/06/12/jardinero-particular_efadf7b2_3.jpg"
                      class="img-fluid"
                     
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="https://images.evisos.cl/2015/06/12/jardinero-particular_efadf7b2_3.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 3"
                        >
                          Web 3
                        </a>
                      </h3>
                      <div>
                        <a
                          href="https://images.evisos.cl/2015/06/12/jardinero-particular_efadf7b2_3.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 3"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app"
         
                >
                  <div class="portfolio-wrap">
                    <img
                      src="https://umbraltecnologico.files.wordpress.com/2016/03/instalacion-mantenimiento-y-reparacion-de-pc-y-redes_30871784_xxl.jpg?w=1108"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="https://umbraltecnologico.files.wordpress.com/2016/03/instalacion-mantenimiento-y-reparacion-de-pc-y-redes_30871784_xxl.jpg?w=1108"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 2"
                        >
                          App 2
                        </a>
                      </h3>
                      <div>
                        <a
                          href="https://umbraltecnologico.files.wordpress.com/2016/03/instalacion-mantenimiento-y-reparacion-de-pc-y-redes_30871784_xxl.jpg?w=1108"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 2"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
              
                >
                  <div class="portfolio-wrap">
                    <img
                      src="src/assets/img/portfolio/portfolio-4.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="src/assets/img/portfolio/portfolio-4.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 2"
                        >
                          Card 2
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-4.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 2"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
                
                >
                  <div class="portfolio-wrap">
                    <img
                      src="src/assets/img/portfolio/portfolio-5.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="src/assets/img/portfolio/portfolio-5.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 2"
                        >
                          Web 2
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-5.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 2"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-app"
           
                >
                  <div class="portfolio-wrap">
                    <img
                      src="src/assets/img/portfolio/portfolio-6.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="src/assets/img/portfolio/portfolio-6.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 3"
                        >
                          App 3
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-6.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 3"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
                
                >
                  <div class="portfolio-wrap">
                    <img
                      src="src/assets/img/portfolio/portfolio-7.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="src/assets/img/portfolio/portfolio-7.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 1"
                        >
                          Card 1
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-7.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 1"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-card"
        
                >
                  <div class="portfolio-wrap">
                    <img
                      src="src/assets/img/portfolio/portfolio-8.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="src/assets/img/portfolio/portfolio-8.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 3"
                        >
                          Card 3
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-8.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Card 3"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 portfolio-item filter-web"
              
                >
                  <div class="portfolio-wrap">
                    <img
                      src="./assets/img/portfolio/portfolio-9.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h3>
                        <a
                          href="./assets/img/portfolio/portfolio-9.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 1"
                        >
                          Web 1
                        </a>
                      </h3>
                      <div>
                        <a
                          href="src/assets/img/portfolio/portfolio-9.jpg"
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="Web 1"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                        <a href="portfolio-details.html" title="Details">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
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
