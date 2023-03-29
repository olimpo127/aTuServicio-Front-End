import { Link } from "react-router-dom";

const Feed = (props) =>{

    return(
        
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p class="card-text">{props.body}</p>
                        <p class="card-text">{props.height}</p>
                        <Link to={"/feed/" + props.id} className="btn btn-secondary shadow-sm">Leer más...</Link>
                        <button className="btn btn-primary"> click</button>
                    
                    </div>
                    </div>
                </div>
            </div>
    
    )
}

export default Feed;