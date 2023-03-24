import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


const Detail = () => {
    const gear = <FontAwesomeIcon icon={faGear} spin style={{height:80}}/>;
   
  return (
    <div className="container col-10 mt-5">
      <h1 className="post d-flex justify-content-center ms-5"><b className="m-3">New Post</b> {gear}</h1>
      <div className=" formulario card m-5">
        <form class="row g-3 m-3">
          <div class="col-md-6 ">
            <label  class="form-label ">
            <b>Title</b>
            </label>
            <input type="text" class="form-control" name="title"/>
          </div>
          <div class="col-md-6">
            <label  class="form-label">
            <b>Price</b>
            </label>
            <input type="text" class="form-control" name="price" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
            <b>Category</b>
            </label>
            <select id="inputState" class="form-select" name="category">
              <option name="Carpentry">Carpentry</option>
              <option name="Mechanics">Mechanics</option>
              <option name="Educational">Educational</option>
              <option name="Technology">Technology</option>
              <option name="gardening">Gardening</option>
            </select>
          </div>
          <div class="col-6">
            <label for="inputState" class="form-label">
            <b>Availability</b>
            </label>
            <select id="inputState" class="form-select">
              <option>Immediate</option>
              <option>Full time</option>
              <option>Part time</option>
              <option>Weekend</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
            <b>City</b>
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
            <b>Region</b>
            </label>
            <select id="inputState" class="form-select">
              <option>Antofagasta.</option>
              <option>Atacama</option>
              <option>Metropolitana</option>
              <option>O'Higgins</option>
              <option>Ñuble</option>
              <option>Magallanes </option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
            <b>Comuna</b>
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-10">
            <label for="exampleFormControlTextarea1">
              <b>Description</b>
            </label>
            <textarea
              className=" red form-control"
              rows="3"
            ></textarea>

            <small id="passwordHelpBlock" class="form-text text-muted">
              Add any notes here.
            </small>
          </div>

          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile01" name="image" />
            <button
              type="btn"
              className="btn btn-warning"
              for="inputGroupFile01"
            >
              Add Image
            </button>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">
             Post Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Detail;
