import styles from '../layout/Message.module.css'; 
import 'animate.css';
import Alert from '@mui/material/Alert'; 
import { useState, useEffect } from 'react';

function Message({ type, message }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            {visible && (
                <Alert 
                    className={`animate__animated animate__pulse ${styles.customAlert}`} // Aplicando animação e classes CSS personalizadas
                    variant="outlined" 
                    severity={type}
                >
                    {message}
                </Alert>
            )}
        </>
    );
}

export default Message;
