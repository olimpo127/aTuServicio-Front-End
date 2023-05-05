import { Link, } from "react-router-dom";



const Services = () => {

  return (
    <section id="services" className="services section-bg">
      <div className="container mt-5">
        <div className="section-title ">
          <h2 className="d-flex justify-content-center">SERVICIOS</h2>
          <p>
            Puedes encontrar una gran variedad de servicios publicados en diferentes especialidades, podrás resolver tus dudas contactándote con la persona que publique. No solo eso, también podrás publicar cualquier tipo de servicio que tú ofrezcas o busques.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-cpu"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Carpintería</Link>
         </h4>
            <p className="description">
              Servicios referidos a construccion y reparaciones.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-clipboard-data"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Mecánica</Link>
         </h4>
            <p className="description">
              Servicios de mecánica de cualquier maquinaria.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-globe"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Educación</Link>
            </h4>
            <p className="description">
              Encuentra a profesores que te pueden dar una ayuda en esa materia que te cuesta.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-images"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Tecnología</Link>
            </h4>
            <p className="description">
              Podrás encontrar, programadores, técnicos PC, smartphone, etc.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-sliders"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Jardinería</Link>
            </h4>
            <p className="description">
              Grandes jardineros esperan hermosear tu jardín.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-building"></i>
            </div>
            <h4 className="title">
              <Link to="/feed">Veterinaria</Link>
            </h4>
            <p className="description">
              Acá encuentras opciones de los mejores veterinarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;