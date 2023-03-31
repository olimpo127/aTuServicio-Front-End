import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';

export default function EditAccount() {

	const { store, actions } = useContext(Context);


	return (
		<Modal show={store.showEditAccount} onHide={actions.closeEditAccount}>
			<Modal.Header closeButton>
				<Modal.Title>Edit my Account</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Write a name"
                        onChange={actions.handleChangeRegister}
                        value={store.user.name}
						/>
						
                
						
					</Form.Group>
					
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control 
							type="text"
							placeholder="Write a user"
							
						/>
						
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="email"
							placeholder="Write an email"
							
						/>
						
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeEditAccount}>
					Cancel
				</Button>
				<Button variant="primary" type="submit"
					
				>
					Update my Account
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
