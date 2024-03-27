import React from 'react';
import { Grid, Typography } from '@mui/material';
import Header from '../components/Header';

import styles from '../styles/panel.module.css';
import ActionButton from '../components/ActionButton';
import MetadataSection from '../components/MetadataSection';

export default function Panel(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <Header />
            <img
                className={styles.originalImage}
                src="./original.image.png"
                alt="original"
            />
            <Grid container spacing={2} columns={16} className={styles.wrapperActions}>
                <Grid item xs={8}>
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
                </Grid>
                <Grid item xs={8}>
                    <section className={styles.rightSection}>
                        <Typography variant="h1">Title</Typography>
                        <div className={styles.creator}>
                            <span>🟣</span>
                            <Typography variant="h6" style={{ textDecoration: 'underline', textIndent: 8 }}>
                            @Creator
                            </Typography>
                        </div>
                        <Typography variant="h6" marginBottom={20}>Description</Typography>
                        <MetadataSection title="Metadata Section 1" labels={['Field label', 'Field label']} />
                        <MetadataSection title="Metadata Section 2" labels={['Field label', 'Field label']} />
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
