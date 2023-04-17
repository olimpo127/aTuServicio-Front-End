import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';



export default function ChangePassword () {
   
    const { store, actions } = useContext(Context);


    return (
        <Modal show={store.showChangePassword} onHide={actions.closeChangePassword}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar Contraseña</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form >
					<Form.Group>
						<Form.Label>Nueva Contraseña</Form.Label>
						<Form.Control 
							type="text"
							placeholder="Escriba nueva contraseña de seis caracteres"
							onChange={(event) => actions.handleChangePassword(event)}
						/>
						
					</Form.Group>
					
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={actions.closeChangePassword}>
					Cancelar
				</Button>
				<Button variant="primary"  onClick={actions.handleEditPassword}
					
				>
					Actualizar mi cuenta
				</Button>
			</Modal.Footer>
		</Modal>
    );
}
