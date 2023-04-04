import { Context } from '../../store/context';
import { useContext } from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";


export default function Shopping() {

	const { store, actions } = useContext(Context);


	return (
        <Container>
                  <Row className="my-2">

                    <Col className="mt-4">
                      <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">

                        <Button variant="warning"
                        
                        >
                          
                        </Button>
                        <Button variant="warning" className="mt-1"
                        
                        >
                          
                        </Button>

                      </Card>
                    </Col>
                  </Row>
                </Container>
    
        
	);
}
