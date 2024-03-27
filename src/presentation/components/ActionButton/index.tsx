import React from 'react';

import styles from './index.module.css';

type ActionButtonProps = {
    title: string
};

export default function ActionButton({ title }: ActionButtonProps): React.JSX.Element {
    return (
        <button className={styles.main} type="button">{title}</button>
    );
}
