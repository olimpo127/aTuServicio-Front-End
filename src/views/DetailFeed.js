import { useParams } from "react-router-dom";
import React, { useState } from "react";

const Read = (props) => {

    return (
        <div className="container-fluid">
        <div className="d-flex justify-content-center card mb-3 text-link rounded-4 shadow-lg p-1 mb-5" >
            <h1>{props.id}</h1>
            <div className="card mb-3  w-75 rounded-4 shadow-lg p-1 mb-5 d-flex align-self-center">
                <div className="row g-4">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Título: {props.title}</h5>
                            <p className="card-text">Precio: {props.price}</p>
                            <p className="card-text">Numero de Movil: {props.mobile_number}</p>
                            <p className="card-text">Categoría: {props.category}</p>
                            <p className="card-text">Disponibilidad: {props.availability}</p>
                            <p className="card-text">Dirección: {props.adres}</p>
                            <p className="card-text">Descripción del Servicio: {props.service_description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
    )
}

const Details = () => {
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    const urlImage = `http://localhost:5000/services/image/${params.id}`;
    const getDetalle = () => {
        const Url = `http://localhost:5000/feed/${params.id}`;
      
        fetch(Url)
            .then((response) => response.json())
            .then((data) => setDetalle(data))
            .catch((error) => console.log(error));
    }
   
        getDetalle();
   

    return  <Read 
        image= {urlImage}
        title={detalle.title}
        price={detalle.price}
        mobile_number={detalle.mobile_number}
        category={detalle.category}
        availability={detalle.availability}
        adres={detalle.adress}
        service_description={detalle.service_description}
        />
    
}

export default Details;
