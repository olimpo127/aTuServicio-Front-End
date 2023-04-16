import { Link, } from "react-router-dom";



const Services = () => {

  return (
    <section id="services" class="services section-bg">
      <div class="container mt-5">
        <div class="section-title ">
          <h2 className="d-flex justify-content-center">SERVICIOS</h2>
          <p>
            Puedes encontrar una gran variedad de servicios publicados en diferentes especialidades, podrás resolver tus dudas contactándote con la persona que publique. No solo eso, también podrás publicar cualquier tipo de servicio que tú ofrezcas o busques.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-cpu"></i>
            </div>
            <h4 class="title">
              <Link to="">Carpintería</Link>
         </h4>
            <p class="description">
              Servicios referidos a construccion y reparaciones.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-clipboard-data"></i>
            </div>
            <h4 class="title">
              <Link to="">Mecánica</Link>
         </h4>
            <p class="description">
              Servicios de mecánica de cualquier maquinaria.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-globe"></i>
            </div>
            <h4 class="title">
              <Link to="">Educación</Link>
            </h4>
            <p class="description">
              Encuentra a profesores que te pueden dar una ayuda en esa materia que te cuesta.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-images"></i>
            </div>
            <h4 class="title">
              <Link to="">Tecnología</Link>
            </h4>
            <p class="description">
              Podrás encontrar, programadores, técnicos PC, smartphone, etc.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-sliders"></i>
            </div>
            <h4 class="title">
              <Link to="">Jardinería</Link>
            </h4>
            <p class="description">
              Grandes jardineros esperan hermosear tu jardín.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <i class="bi bi-building"></i>
            </div>
            <h4 class="title">
              <Link to="">Veterinaria</Link>
            </h4>
            <p class="description">
              Acá encuentras opciones de los mejores veterinarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;