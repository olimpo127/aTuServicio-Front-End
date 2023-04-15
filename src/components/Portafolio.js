import React, { useEffect, useState } from 'react';

const Portafolios =(props)=>{
    return(
        
        

              <div class="portfolio-wrap">
                <img
                  src={props.img}
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h3>
                 {props.title}
                  </h3>
                </div>
              </div>
          
         
         
    )
}





const Portafolio =()=>{


    return(
        <section id="portfolio" class="container portfolio mt-5">
        <div class="container">
        <div class="section-title d-flex justify-content-center mb-3">
          <h2>Publica como ellos</h2>
        </div>
        <div className="row  portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://media.istockphoto.com/id/540588246/es/foto/hombre-joven-atractivo-jardinero-de-corte-y-lanscaping-%C3%A1rboles-con-tijeras.jpg?s=612x612&w=0&k=20&c=xtuxeM3Vzu6AekQXx-k3c57KCVNEBXxj8rVthEmjR3k=" title="Se ofrece Jardinero" />
         </div>
         <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://media.istockphoto.com/id/1357774532/es/foto/perro-en-el-veterinario.jpg?s=612x612&w=0&k=20&c=ewKatjPfhpgrImiL0p6iwsdm3_fOUGOiZk8_2d4egGU=" title="Veterinaria a domicilio"/>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://cdn.pixabay.com/photo/2019/02/25/13/35/barber-4019672_640.jpg" title="Barbero profesional"/>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://cdn.pixabay.com/photo/2017/07/16/20/44/mobile-phone-2510529_1280.jpg" title="Se reparan celulares"/>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://cdn.pixabay.com/photo/2018/05/11/22/18/painter-3391881_640.jpg" title="Pintor-Yesero"/>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <Portafolios  img="https://cdn.pixabay.com/photo/2018/09/20/22/23/auto-repair-3691962_640.jpg" title="Busco mecanico confiable"/>
        </div>
      </div>
      </div>
     
     </section>    
      
    )
}


export default Portafolio;