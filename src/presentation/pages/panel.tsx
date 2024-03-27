import React from 'react';
import Header from '../components/header';

import styles from '../styles/panel.module.css';
import ActionButton from '../components/ActionButton';

export default function Panel(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <Header />
            <img
                className={styles.originalImage}
                src="./original.image.png"
                alt="original"
            />
            <div className={styles.actionsBox}>
                <ActionButton title="P" />
                <ActionButton title="O" />
                <ActionButton title="Bi" />
                <ActionButton title="BV" />
            </div>
            <img
                className={styles.panelImage}
                src="./buy.panel.jpg"
                alt="buy panel"
            />
            <div>
                <h2>Title</h2>
                <div className={styles.creator}>
                    <span>🟣</span>
                    <h5 style={{ textDecoration: 'underline' }}>@Creator</h5>
                </div>
                <h2>Description</h2>
            </div>
        </main>
    );
}
