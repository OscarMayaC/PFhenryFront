import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ConfirmationDeleteBooking(props) {
    return (
        <Alert variant="warning">
            ¿Estas seguro de que deseas cancelar esta reserva?
            <div className="d-flex justify-content-end mt-3">
                <Button variant="outline-secondary" className="me-2" onClick={props.cancelBooking}>
                    Si
                </Button>
                <Button variant="warning" onClick={props.notCancelBooking}>
                    No
                </Button>
            </div>
        </Alert>
    );
}

export default ConfirmationDeleteBooking;