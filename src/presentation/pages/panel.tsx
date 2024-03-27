import React from 'react';
import Header from '../components/header';

import styles from '../styles/panel.module.css';

export default function Panel(): React.JSX.Element {
    return (
        <main>
            <Header />
            <img
                className={styles.originalImage}
                src="./original.image.png"
                alt="original"
            />
        </main>
    );
}
