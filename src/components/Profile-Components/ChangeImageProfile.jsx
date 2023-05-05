import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../store/context';
import { useContext } from 'react';
import Avatar from '../Avatar';


export default function ChangeImageProfile () {
   
    const { store, actions } = useContext(Context);


    return (
        <Modal show={store.showChangeImageProfile} onHide={actions.closeChangeImageProfile}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar Imagen de Perfil</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Avatar/>
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