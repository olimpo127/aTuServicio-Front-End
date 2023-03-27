import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context"


const Detail = () => {
  const { store, actions } = useContext(Context);
  const gear = <FontAwesomeIcon icon={faGear} spin style={{ height: 80 }} />;

  return (
    <div className="container col-10 mt-5">
      <h1 className="post d-flex justify-content-center ms-5"><b className="m-3">New Post</b>{gear}</h1>
      <div className=" formulario card m-5">
        <form className="row g-3 m-3">
          <div className="col-md-6 ">
            <label className="form-label ">
              <b>Title</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={store.post.title}
              onChange={actions.handleService}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              <b>Price</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={store.post.price}
              onChange={actions.handleService}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              <b>Category</b>
            </label>
            <select id="inputState" className="form-select" onChange={actions.handleService} value={store.post.category} name="category">
              <option name="carpentry" value="carpentry" >Carpentry</option>
              <option name="mechanics" value="mechanics" >Mechanics</option>
              <option name="educational" value ="educational" >Educational</option>
              <option name="technology" value="technology" >Technology</option>
              <option name="gardening" value="gardening" >Gardening</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="inputState" className="form-label">
              <b>Availability</b>
            </label>
            <select id="inputState" className="form-select" onChange={actions.handleService} value={store.post.availability} name="availability">
              <option name="inmediate" value="inmediate">Immediate</option>
              <option name="full_time" value="full_time">Full time</option>
              <option name="part_time" value="part_time">Part time</option>
              <option name="weekend" value="weekend">Weekend</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              <b>City</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={store.post.city}
              onChange={actions.handleService}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label" >
              <b>Region</b>
            </label>
            <select id="inputState" className="form-select" onChange={actions.handleService} value={store.post.region} name="region">
              <option name="antofagasta" value="antofagasta" >Antofagasta.</option>
              <option name="atacama" value="atacama" >Atacama</option>
              <option name="metropolitana" value="metropolitana" >Metropolitana</option>
              <option name="o'higgins" value="o'higgins" >O'Higgins</option>
              <option name="ñuble" value="ñuble" >Ñuble</option>
              <option name="magallanes" value="magallanes" >Magallanes </option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              <b>Comuna</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="comuna"
              value={store.post.comuna}
              onChange={actions.handleService}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="exampleFormControlTextarea1">
              <b>Description</b>
            </label>
            <textarea
              className=" red form-control"
              rows="3"
              type="text"
              name="description"
              value={store.post.description}
              onChange={actions.handleService}
            ></textarea>

            <small id="passwordHelpBlock" className="form-text text-muted">
              Add any notes here.
            </small>
          </div>

          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile01" name="image" />
            <button
              type="btn"
              className="btn btn-warning"
              htmlFor="inputGroupFile01"
            >
              Add Image
            </button>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success" onClick={() => actions.handleServiceCreation()}>
              Post Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Detail;
