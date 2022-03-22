import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface AlertNotifiactionProps {}

const AlertNotifiaction: React.FC<AlertNotifiactionProps> = (props) => {
    const { closeAlert } = useActions();
    const { isAlertOpen, message } = useTypedSelector((state) => state.alert);

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isAlertOpen}
            onClose={closeAlert}
            onClick={closeAlert}
            autoHideDuration={3000}
        >
            <Alert severity='info'>{message}</Alert>
        </Snackbar>
    );
};

export default AlertNotifiaction;
