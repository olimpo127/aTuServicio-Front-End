import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context";
import { useEffect } from "react";
import ChangePassword from "../components/Profile-Components/ChangePassword.jsx";
import EditAccount from "../components/Profile-Components/EditAccount.jsx";
import DeleteAccount from "../components/Profile-Components/DeleteAccount.jsx";
import Shopping from "../components/Profile-Components/Shopping";
import { Feed } from "./Feeds";
import Reviews from "../components/Profile-Components/Reviews";
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avatar from "../components/Avatar";




const Profile = () => {

  const icon1 = <FontAwesomeIcon icon={faGears} />
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getAccount(store.myAccount.id);
    /*actions.getServicios(store.myAccount.id);*/
  }, [])


  return (

    <div className="container-xl px-3 px-md-4 px-lg-5">
      <h2 className="text-decoration-underline  my-3">Mi Perfil</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-outline-danger me-md-2" onClick={e => actions.cerrarSesion(navigate)}>cerrar sesión</button>
      </div>
      <div class="row">
        <div class=" col-md-2">

          <div class="abs-center panel d-flex justify-content-end  my-5">
            <div class="image_inner_container panel-body pn">
              <div class="image_inner_container img img-about">
                {/*deshabilitar cuando se tenga disponible componente avatar*/}
                <img src="https://avatars.githubusercontent.com/u/116116678?v=4" name="avatar" border="0" class="img-circle" />
                {/*habilitar cuando se tenga disponible componente avatar*/}
                {/*<img src={store.myAccount?.picture} name="avatar" border="0" class="img-circle" />*/}
              </div>
            </div>
          </div>

          <div class="abs-center panel  d-flex  justify-content-end ">
            <div class="panel-title">
              <h3 class="text-title">{store.myAccount?.name} {store.myAccount?.lastname}</h3>
              <h5 class="text-title">Usuario: {store.myAccount?.username}</h5>
              <h5 class="text-title">Email: {store.myAccount?.email}</h5>
              <Rating name="size-large" defaultValue={4} size="large" />

            </div>

          </div>

        </div>

        <div class="col-md-10 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="my-3">
            <ul class="nav nav-tabs " id="myTab" role="tablist">
              <li class="nav-item " role="presentation">
                <a class="nav-link active activeme" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">Mis Servicios</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="sell-tab" data-bs-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Mis Publicaciones</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Calificaciones</a>
              </li>
              <li class="nav-item " role="presentation">
                <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">{icon1}Configuración de la Cuenta</a>
              </li>
            </ul>

            <div class="tab-content py-4" id="myTabContent">
              <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card className="mx-auto p-4">

                        <Shopping />

                      </Card>
                    </Col>
                  </Row>
                </Container>


              </div>
              <div class="tab-pane fade show active" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card  className="mx-auto p-4">
                        {Feed}
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div class="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="row">
                  <div class="col-md-12">
                    <Container>
                      <Row className="my-2">

                        <Col className="mt-4">
                          <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                            <Reviews />
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <div class="row">
                  <div class="col-md-12">
                    <Container>
                      <Row className="my-2">

                        <Col className="mt-4">
                          <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">

                            <Button variant="warning"
                              onClick={actions.openEditAccount}
                            >
                              Editar Perfil
                            </Button>
                            <Button variant="warning" className="mt-1"
                              onClick={actions.openChangePassword}
                            >
                              Cambiar Contraseña
                            </Button>
                            <Button variant="warning" className="mt-4 text-danger"
                              onClick={actions.openDeleteAccount}
                            >
                              Eliminar Perfil
                            </Button>
                          </Card>
                        </Col>
                      </Row>
                    </Container>





                  </div>





                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


      <EditAccount />
      <ChangePassword />
      <DeleteAccount />



    </div>


  );
};
export default Profile;
