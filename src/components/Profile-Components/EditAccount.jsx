import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';

export default function EditAccount() {

	const { store, actions } = useContext(Context);


	return (
		<Modal show={store.showEditAccount} onHide={actions.closeEditAccount}>
			<Modal.Header closeButton>
				<Modal.Title>Editar my Cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type="text"
							placeholder="Escriba nuevo usuario"
							onChange={(event) => actions.handleChangeUsername(event)}
							/*value={store.user.username}*/
						/>

					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Escriba nuevo email"
							onChange={(event) => actions.handleChangeEmail(event)}
							/*value={store.user.email}*/

						/>

					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeEditAccount}>
					Cancelar
				</Button>
				<Button variant="primary"  onClick={actions.handleEditAccount}

				>
					Actualizar mi cuenta
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
