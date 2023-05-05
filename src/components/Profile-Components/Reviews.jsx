import { Context } from '../../store/context';
import { useContext } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import Search from '../SearchFeed';
import { Rating, Avatar } from '@mui/material';

export default function Reviews() {

    const { store, actions } = useContext(Context);


    return (
        <Container >
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://avatars.githubusercontent.com/u/33846362?v=4"
                            sx={{ width: 56, height: 56 }}
                        />
                        <Card.Body>
                            <Card.Title>Juan Rodríguez</Card.Title>
                            <Card.Title>Montaje de Muebles</Card.Title>
                            <Rating name="size-large" defaultValue={5} size="medium" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                            sx={{ width: 56, height: 56 }}
                        />
                        <Card.Body>
                            <Card.Title>Héctor Osuna</Card.Title>
                            <Card.Title>Montaje de Puertas</Card.Title>
                            <Rating name="size-large" defaultValue={3} size="medium" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                            sx={{ width: 56, height: 56 }}
                        />
                        <Card.Body>
                            <Card.Title>Luisa Robles</Card.Title>
                            <Card.Title>Montaje de Ventanas</Card.Title>
                            <Rating name="size-large" defaultValue={1} size="medium" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


    );
}
