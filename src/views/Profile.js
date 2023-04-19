import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context";
import { useEffect } from "react";
import ChangePassword from "../components/Profile-Components/ChangePassword.jsx";
import EditAccount from "../components/Profile-Components/EditAccount.jsx";
import DeleteAccount from "../components/Profile-Components/DeleteAccount.jsx";
import ChangeImageProfile from "../components/Profile-Components/ChangeImageProfile.jsx";
import Shopping from "../components/Profile-Components/Shopping";
import Reviews from "../components/Profile-Components/Reviews";
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FeedsProfile from "../components/FeedsProfile";




const Profile = () => {
  const icon1 = <FontAwesomeIcon icon={faGears} />
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const urlAvatar = "http://localhost:5000/users/avatar/"+store.myAccount.id
  useEffect(() => {
    actions.getAccount(store.myAccount.id);
  }, [])


  return (

    <div className="container-xl px-3 px-md-4 px-lg-5">
      <h2 className="text-decoration-underline  my-3">Mi Perfil</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-outline-danger me-md-2" onClick={e => actions.cerrarSesion(navigate)}>cerrar sesión</button>
      </div>
      <div className="row">
        <div className=" col-md-2">

          <div className="abs-center panel d-flex justify-content-end  my-5">
            <div className="image_inner_container panel-body pn">
              <div className="image_inner_container img img-about">
                <img src= {urlAvatar} name="avatar" border="0" className="img-circle" alt =" "/>
              </div>
            </div>
          </div>

          <div className="abs-center panel  d-flex  justify-content-end ">
            <div className="panel-title">
              <h3 className="text-title">{store.myAccount?.name} {store.myAccount?.lastname}</h3>
              <h5 className="text-title">Usuario: {store.myAccount?.username}</h5>
              <h5 className="text-title">Email: {store.myAccount?.email}</h5>
              <Rating name="size-large" defaultValue={4} size="large" />
            </div>

          </div>

        </div>

        <div className="col-md-10 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="my-3">
            <ul className="nav nav-tabs " id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                <a className="nav-link active" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">Mis Servicios</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="sell-tab" data-bs-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Mis Publicaciones</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Calificaciones</a>
              </li>
              <li className="nav-item " role="presentation">
                <a className="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false"> {icon1} Configuración de la Cuenta</a>
              </li>
            </ul>

            <div className="tab-content py-4" id="myTabContent">
              <div className="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab" tabIndex ="0">
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
              <div className="tab-pane fade  " id="sell" role="tabpanel" aria-labelledby="sell-tab" tabIndex ="0">
                <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card  className="mx-auto p-4">

                        <FeedsProfile/>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="tab-pane fade  " id="reviews" role="tabpanel" aria-labelledby="reviews-tab" tabIndex ="0">
                <div className="row">
                  <div className="col-md-12">
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

              <div className="tab-pane fade  " id="settings" role="tabpanel" aria-labelledby="settings-tab" tabIndex ="0">
                <div className="row">
                  <div className="col-md-12">
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
                            <Button variant="warning" className="mt-1"
                              onClick={actions.openChangeImageProfile}
                            >
                              Cambiar foto Perfil
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
      <ChangeImageProfile />



    </div>


  );
};
export default Profile;
