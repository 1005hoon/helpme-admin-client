import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';

interface AlertNotifiactionProps {}

const AlertNotifiaction: React.FC<AlertNotifiactionProps> = (props) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const onCloseAlert = () => {
        setIsAlertOpen(() => false);
        setMessage(() => null);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isAlertOpen}
            onClose={onCloseAlert}
            onClick={onCloseAlert}
            autoHideDuration={3000}
        >
            <Alert severity='info'>{message}</Alert>
        </Snackbar>
    );
};

export default AlertNotifiaction;
