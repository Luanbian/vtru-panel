import React from 'react';
import Header from '../components/header';

import styles from '../styles/panel.module.css';

export default function Panel(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <Header />
        </main>
    );
}
