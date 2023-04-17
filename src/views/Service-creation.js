import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context";
import ImageService from "../components/ImageService";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";


const Detail = () => {
  const { store, actions } = useContext(Context);
  const gear = <FontAwesomeIcon icon={faGear} spin style={{ height: 80 }} />;

  const addFeed = () => {
    actions.handleServiceCreation();
  };

  const apiGoogle = useJsApiLoader({
    googleMapsApiKey:
      "AIzaSyCo2rtCGoBUJggotk150GkgqtZ-aBz_Scs&libraries=places",
  });

  return (
    <div className="container col-10 mt-5">
      <h1 className="post d-flex justify-content-center ms-5">
        <b className="m-3">Nueva Publicación</b>
        {gear}
      </h1>
      <div className=" formulario card m-5">
        <form
          onSubmit={actions.handleServiceCreation}
          className="row g-3 m-3 was-validated"
          novalidate
        >
          <div className="col-md-6 ">
            <label
              className="form-label has-validatio"
              for="validationCustom01"
            >
              <b>Título</b>
            </label>
            <input
              type="text"
              className="form-control "
              name="title"
              onChange={actions.handleService}
              value={store.service.title}
              id="validationCustom01"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">
              <b>Precio</b>
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={actions.handleService}
              value={store.service.price}
              required
            />
          </div>

          <div className="col-md-3 ">
            <label className="form-label">
              <b>Número de contacto </b>
            </label>
            <input
              type="number"
              className="form-control"
              name="mobile_number"
              onChange={actions.handleService}
              value={store.service.mobile_number}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              <b>Categoría</b>
            </label>
            <select
              id="inputState"
              className="form-select form-control"
              onChange={actions.handleService}
              value={store.service.category}
              name="category"
              required
            >
              <option>Selecciona categoría...</option>
              <option name="Carpinteria" value="Carpinteria">
                Carpintería
              </option>
              <option name="Mecanica" value="Mecanica">
                Mecánica
              </option>
              <option name="Educacional" value="educacional">
                Educacional
              </option>
              <option name="Tecnologia" value="Tecnologia">
                Tecnológica
              </option>
              <option name="Jardineria" value="Jardineria">
                Jardinería{" "}
              </option>
              <option name="Otros" value="Otros">
                Otros
              </option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="inputState" className="form-label">
              <b>Disponibilidad</b>
            </label>
            <select
              id="inputState"
              className="form-select form-control"
              onChange={actions.handleService}
              value={store.service.availability}
              name="availability"
              required
            >
              <option>Selecciona disponibilidad...</option>
              <option name="inmediate" value="inmediate">
                Immediata
              </option>
              <option name="full_time" value="full_time">
                Full time
              </option>
              <option name="part_time" value="part_time">
                Part time
              </option>
              <option name="weekend" value="weekend">
                Fin de semana
              </option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              <b>Dirección</b>
            </label>

           <Autocomplete>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="adress"
                onChange={actions.handleService}
                value={store.service.adress}
                ref={actions.originRef}
                required
              />
            </Autocomplete>
          </div>

          <div className="col-md-12 mb-2">
            <label htmlFor="Textarea">
              <b>Descripción</b>
            </label>
            <textarea
              id="Textarea"
              className="form-control"
              rows="3"
              type="text"
              name="service_description"
              onChange={actions.handleService}
              value={store.service.service_description}
              required
            ></textarea>

            <small id="passwordHelpBlock" className="form-text text-muted">
              Agrega una descripcion.
            </small>
          </div>

          <div className="boton-new col-12  ">
            <button
              type="submit"
              className="btn btn-success"
              onChange={addFeed}
            >
              Nuevo Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Detail;
