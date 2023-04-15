import React, { useEffect, useState } from 'react';

const Portafolio =(props)=>{
    
    
    return(
        <section id="portfolio" class="container portfolio mt-5">
        <div class="container">
          <div class="section-title d-flex justify-content-center mb-3">
            <h2>Publica como ellos</h2>
          </div>

          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src=""
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h3>
                  {props.title}s
                  </h3>
                </div>
              </div>
            </div>
            </div>

        </div>
      </section>
    )
}


export default Portafolio;