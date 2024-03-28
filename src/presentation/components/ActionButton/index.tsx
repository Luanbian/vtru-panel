import React from 'react';
import { Button } from '@mui/material';
import styles from './index.module.css';

type ActionButtonProps = {
    title: string;
    onClick?: () => void;
};

export default function ActionButton({
    title,
    onClick,
}: ActionButtonProps): React.JSX.Element {
    return (
        <Button className={styles.main} type="button" onClick={onClick}>
            {title}
        </Button>
    );
}
