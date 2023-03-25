import { useParams } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/img/logo.png"

const Home = () => {
    return (
        <div>
            <div class="info d-flex align-items-center p-5">
                <div class="container">
                    <div class="row justify-content-center ">
                        <div class="col-lg-8 text-center text-light">
                            <img src={logo} data-aos="fade-down"/>
                            <p data-aos="fade-up" className="fs-5 mt-5">Bienvenidos a nuestra página web de servicios de reparación y mantenimiento del hogar, donde nos esforzamos por ofrecerle soluciones efectivas y asequibles para cualquier problema que surja en su hogar. Nos especializamos en una amplia gama de servicios, desde reparaciones menores hasta proyectos más grandes de remodelación, todo ello con un enfoque en la calidad y la satisfacción del cliente. Si necesita una mano amiga para arreglar un grifo que gotea, reparar un electrodoméstico defectuoso o realizar un mantenimiento preventivo en su hogar, ¡nosotros estamos aquí para ayudarle!</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )


}
export default Home;