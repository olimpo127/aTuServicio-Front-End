import { Context } from '../../store/context';
import { useContext } from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Search from '../SearchFeed';
import { Rating } from '@mui/material';


export default function Shopping() {

    const { store, actions } = useContext(Context);


    return (
        <Container >
            <Search />
            <Row className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">

                <Col className="col-md-5">
                    <img src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg" className="img-fluid rounded-start" alt="..." />
                </Col>

                <Col className="col-md-7 ">
                        <h2 >Titulo Servicio</h2>
                        <button className="btn btn-primary"> click</button>
                </Col>

                <Col className="col-7 my-2">
                    <h5 className="card-title">Calificar</h5>
                    <Rating name="size-large" defaultValue={0} size="medium" />
                </Col>


            </Row>
        </Container>


    );
}
