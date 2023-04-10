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
import Reviews from "../components/Profile-Components/Reviews";
import { Rating } from '@mui/material';



const Profile = () => {

  const icon1 = <FontAwesomeIcon icon={faGears} />
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAccount();
  }, [])


  return (

    <div className="container-xl px-3 px-md-4 px-lg-5">
      <h4 className="text-decoration-underline  my-3">Your Account</h4>
      <div class="row">
        <div class=" col-md-2">

          <div class="abs-center panel d-flex justify-content-end  my-5">
            <div class="image_inner_container panel-body pn">
              <div class="image_inner_container img img-about">
                <img src="https://avatars.githubusercontent.com/u/116116678?v=4" name="avatar" border="0" class="img-circle" />
              </div>
            </div>
          </div>

          <div class="abs-center panel  d-flex  justify-content-end ">
            <div class="panel-title">
              <h3 class="text-title">{store.myAccount?.name} {store.myAccount?.lastname}</h3>
              <h5 class="text-title">Username: {store.myAccount?.username}</h5>
              <h5 class="text-title">Email: {store.myAccount?.email}</h5>
              <Rating name="size-large" defaultValue={0} size="large" />
            
            </div>

          </div>

        </div>

        <div class="col-md-10 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div class="my-3">
            <ul class="nav nav-tabs " id="myTab" role="tablist">
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
                <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card className="mx-auto p-4">

                      <Shopping/>

                      </Card>
                    </Col>
                  </Row>
                </Container>


              </div>
              <div class="tab-pane fade show active" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">

                        <Button variant="warning"
                        /*onClick={openEditAccount}*/
                        >
                          My Servicies
                        </Button>
                        <Button variant="warning" className="mt-1"
                        /*onClick={openChangePassword}*/
                        >
                          My Sales
                        </Button>

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
                              <Reviews/>
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
                              Edit Account
                            </Button>
                            <Button variant="warning" className="mt-1"
                              onClick={actions.openChangePassword}
                            >
                              Change Password
                            </Button>
                            <Button variant="warning" className="mt-4 text-danger"
                              onClick={actions.openDeleteAccount}
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

      
      <EditAccount />
      <ChangePassword />
      <DeleteAccount />



    </div>


  );
};
export default Profile;
