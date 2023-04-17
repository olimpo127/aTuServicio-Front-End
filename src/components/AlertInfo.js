import { Link } from "react-router-dom";

const AlertInfo = () => {
    return (
        <div classNameName="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login...</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Aun no estas logueado... entra o crea tu cuenta
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <Link to="/signup" type="button" className="btn btn-primary">Save changes</Link>
      </div>
    </div>
  </div>
</div>
    )

}
export default AlertInfo