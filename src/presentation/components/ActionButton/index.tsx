import React from 'react';
import { Button } from '@mui/material';
import styles from './index.module.css';

type ActionButtonProps = {
    title: string;
};

export default function ActionButton({
    title,
}: ActionButtonProps): React.JSX.Element {
    return (
        <Button className={styles.main} type="button">
            {title}
        </Button>
    );
}
