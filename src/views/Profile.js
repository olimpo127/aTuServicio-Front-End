import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/context";
import { useEffect } from "react";
import ChangePassword from "../components/components_profile/ChangePassword";
import EditAccount from "../components/components_profile/EditAccount";
import DeleteAccount from "../components/components_profile/DeleteAccount";




const Profile = () => {
  const icon1 = <FontAwesomeIcon icon={faGears} />
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAccount(3);
  }, [])

  const [isOpenDeleteAccount, openDeleteAccount, closeDeleteAccount] = actions.useModal();
  const [isOpenChangePassword, openChangePassword, closeChangePassword] = actions.useModal();
  const [isOpenEditAccount, openEditAccount, closeEditAccount] = actions.useModal();
  

  return (

    <div className="container-xl px-3 px-md-4 px-lg-5">
      <h4 className="text-decoration-underline my-3">Your Account</h4>
      <div class="row">
        <div class=" col-md-4">

          <div class="abs-center panel  d-flex aling-items-center  my-5">
            <div class="image_inner_container panel-body pn">
              <div class="image_inner_container img img-about">
                <img src="	https://avatars.githubusercontent.com/u/116116678?v=4" name="avatar" border="0" class="img-circle" />
              </div>
            </div>
          </div>

          <div class="abs-center panel  d-flex justify-content-center aling-items-center ">
            <div class="panel-title">
              <h1 class="text-title">{store.myAccount?.name} {store.myAccount?.lastname}</h1>
            </div>

          </div>

        </div>

        <div class="col-md-8 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="my-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item " role="presentation">
                <a class="nav-link active activeme" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">Orders</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="sell-tab" data-bs-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Sell</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Customer Reviews</a>
              </li>
              <li class="nav-item " role="presentation">
                <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">{icon1}Account Settings</a>
              </li>
            </ul>

            <div class="tab-content py-4" id="myTabContent">
              <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                <p>Mis Compras</p>


              </div>
              <div class="tab-pane fade show active" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                <p>Mis Publicaciones</p>
                <p>Ventas</p>
              </div>
              <div class="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="row">
                  <div class="col-md-12">
                    <p>Mis calificaciones</p>
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
                              onClick={openEditAccount}
                            >
                              Edit Account
                            </Button>
                            <Button variant="warning" className="mt-1"
                              onClick={openChangePassword}
                            >
                              Change Password
                            </Button>
                            <Button variant="warning" className="mt-1 text-danger"
                              onClick={openDeleteAccount}
                            >
                              Delete Account
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




    </div>


  );
};
export default Profile;
