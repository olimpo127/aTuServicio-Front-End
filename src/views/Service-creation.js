import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context"

import {
  useJsApiLoader,Autocomplete
} from '@react-google-maps/api'



const Detail = () => {
  const { store, actions } = useContext(Context);
  const gear = <FontAwesomeIcon icon={faGear} spin style={{ height: 80 }} />;
  const addFeed =()=>{
    actions.handleServiceCreation();
   
};
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCo2rtCGoBUJggotk150GkgqtZ-aBz_Scs&libraries=places"
    
  })
  
  return (
    <div className="container col-10 mt-5">
      <h1 className="post d-flex justify-content-center ms-5"><b className="m-3">New Post</b>{gear}</h1>
        <div className=" formulario card m-5">
          <form onSubmit={actions.handleServiceCreation} className="row g-3 m-3">
            <div className="col-md-6 ">
              <label className="form-label ">
                <b>Title</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={actions.handleService}
                value={store.service.title}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">
                <b>Price</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={actions.handleService}
                value={store.service.price}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">
                <b>Mobil number</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="mobilNumber"
                onChange={actions.handleService}
                value={store.service.mobileNumber}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                <b>Category</b>
              </label>
              <select id="inputState" className="form-select form-control" onChange={actions.handleService} value={store.service.category} name="category">
                <option>Select Category...</option>
                <option name="carpentry" value="carpentry" >Carpentry</option>
                <option name="mechanics" value="mechanics" >Mechanics</option>
                <option name="educational" value="educational" >Educational</option>
                <option name="technology" value="technology" >Technology</option>
                <option name="gardening" value="gardening" >Gardening</option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="inputState" className="form-label">
                <b>Availability</b>
              </label>
              <select id="inputState" className="form-select form-control" onChange={actions.handleService} value={store.service.availability}  name="availability">
                <option>Select Availability...</option>
                <option name="inmediate" value="inmediate">Immediate</option>
                <option name="full_time" value="full_time">Full time</option>
                <option name="part_time" value="part_time">Part time</option>
                <option name="weekend" value="weekend">Weekend</option>
              </select>
            </div>
            <div className="col-md-6">
              
              <label htmlFor="inputCity" className="form-label">
                <b>Adress</b>
              </label>
              <Autocomplete>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                onChange={actions.handleService}
                value={store.service.city}
                ref={actions.originRef}
              />
              </Autocomplete>
              
            </div>
            
            <div className="col-md-10">
              <label htmlFor="Textarea">
                <b>Description</b>
              </label>
              <textarea
                id="Textarea"
                className="form-control"
                rows="3"
                type="text"
                name="service_description"
                onChange={actions.handleService}
                value={store.service.service_description}
              ></textarea>

              <small id="passwordHelpBlock" className="form-text text-muted">
                Add your description post.
              </small>
            </div>
{/*             <div className="input-group">
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
            </div> */}
            <div className="col-12">
              <button type="submit" className="btn btn-success" onChange={addFeed}>
                Post Now 
              </button>
            </div>
          </form>
        </div>

      
      
    </div>

  );
};
export default Detail;
