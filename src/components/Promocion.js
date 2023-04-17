import Map from "./Maps"
import poleradelantera from "../assets/img/polera-adelante.jpg"
import poleradetras from "../assets/img/polera-atras.jpg"

const Promocion =()=>{
    return(
        
    <div className="container-promocion ">
        <div className="row g-0 mb-5 ">
            <div className="promocion col-md-4 mb-4 ">
                <img  src={poleradelantera} className=" imagen-1 img-fluid rounded-circle  mx-5  mt-5 mb-5 w-75 "/>
                
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h1 className="card-title  mt-5 ">Ven por tu polera! <small className="text-muted">Así confirmarás aún más tu participación en nuestra web</small>
                    </h1>
                    <p className="ms-auto">Nuestro compromiso sin duda es ser el puente confiable entre el servicio y el cliente, para eso puedes confirmar aún más tu participación con nosotros retirando tu polera de trabajo.
                    Te mostramos donde puedes hacer retiro de ella en este mapa, en donde también puedes calcular tu ruta de viaje para ejecutar algún servicio.</p>
                 <Map/>
                </div>
            </div>
        
        </div>
        </div>
    )
}

export default Promocion