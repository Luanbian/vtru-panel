import React from 'react';
import { Button } from '@mui/material';
import styles from './index.module.css';

type ActionButtonProps = {
    title: string;
    onClick?: () => void;
    imageUrl: string;
};

export default function ActionButton({
    title,
    onClick,
    imageUrl,
}: ActionButtonProps): React.JSX.Element {
    return (
        <Button
            className={styles.main}
            sx={{ backgroundImage: `url(${imageUrl})` }}
            type="button"
            onClick={onClick}
        >
            {title}
        </Button>
    );
}
