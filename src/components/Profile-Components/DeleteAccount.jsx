import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';

export default function DeleteAccount() {

	const { store, actions } = useContext(Context);


	return (
		<Modal show={store.showDeleteAccount} onHide={actions.closeDeleteAccount}>
			<Modal.Header closeButton>
				<Modal.Title>Eliminar Cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label className="text-danger">
							<b>
							 ¿Está seguro de que desea eliminar su cuenta de forma permanente?

							 tus datos se perderán
							</b>

						</Form.Label>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeDeleteAccount}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={actions.DeleteRegister}
				>
					Eliminar mi Cuenta
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
