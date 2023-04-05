import { Context } from '../../store/context';
import { useContext } from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Search from '../SearchFeed';
import { Rating, Avatar } from '@mui/material';

export default function Reviews() {

    const { store, actions } = useContext(Context);


    return (
        <Container >
            <Search />
            <Row className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">

                <Col className="col-md-5">
                    <Avatar
                        alt="Remy Sharp"
                        src="https://avatars.githubusercontent.com/u/33846362?v=4"
                        sx={{ width: 56, height: 56 }}
                    />
                </Col>

                <Col className="col-md-7 ">
                    <h5 class="text-title">{store.myAccount?.username}</h5>
                    <h6 class="text-title">Titulo Servicio</h6>

                </Col>

                <Col className="col-7 my-2">
                    <Rating name="size-large" defaultValue={0} size="medium" />
                </Col>


            </Row>
        </Container>


    );
}
