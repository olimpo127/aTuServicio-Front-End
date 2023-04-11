import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';



export default function ChangePassword () {
   
    const { store, actions } = useContext(Context);


    return (
        <Modal show={store.showChangePassword} onHide={actions.closeChangePassword}>
			<Modal.Header closeButton>
				<Modal.Title>Change Password</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label>New Password</Form.Label>
						<Form.Control 
							type="text"
							placeholder="Write new password"
							onChange={(event) => actions.handleChangePassword(event)}
						/>
						
					</Form.Group>
					
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeChangePassword}>
					Cancel
				</Button>
				<Button variant="primary"  onClick={actions.handleEditPassword}
					
				>
					Update my Account
				</Button>
			</Modal.Footer>
		</Modal>
    );
}
