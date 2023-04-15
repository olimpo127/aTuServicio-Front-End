import { Context } from '../../store/context';
import { useContext } from 'react';
import { Container, Card } from "react-bootstrap";
import Search from '../SearchFeed';
import { Rating, Avatar } from '@mui/material';

export default function Reviews() {

    const { store, actions } = useContext(Context);


    return (
        <Container >
            <Search />


            <Card style={{ width: '18rem' }} className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded g-0">
                <Avatar
                    alt="Remy Sharp"
                    src="https://avatars.githubusercontent.com/u/33846362?v=4"
                    sx={{ width: 56, height: 56 }}
                />
                <Card.Body>
                    <Card.Title>{store.myAccount?.username}</Card.Title>
                    <Card.Title>Titulo Servicio</Card.Title>
                    <Rating name="size-large" defaultValue={0} size="medium" />
                </Card.Body>
            </Card>



        </Container>


    );
}
