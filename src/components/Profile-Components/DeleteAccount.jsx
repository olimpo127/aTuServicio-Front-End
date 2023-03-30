import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';

export default function DeleteAccount() {

	const { store, actions } = useContext(Context);


	return (
		<Modal show={store.showDeleteAccount} onHide={actions.closeDeleteAccount}>
			<Modal.Header closeButton>
				<Modal.Title>Delete Account</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label className="text-danger">
							<b>
								Are you sure you want to permanently delete your account?

								your data will be lost
							</b>

						</Form.Label>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeDeleteAccount}>
					Cancel
				</Button>
				<Button variant="primary"
					disabled={store}
				>
					Delete my Account
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
