import React from 'react';
import { Grid, Typography } from '@mui/material';

import ActionButton from '../components/ActionButton';
import MetadataSection from '../components/MetadataSection';
import Avatar from '../components/Avatar';

import styles from '../styles/panel.module.css';

import json from '../../../a.json';

export default function Panel(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <img
                className={styles.originalImage}
                src="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                alt="original"
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                    <section className={styles.rightSection}>
                        <Typography variant="h1">My NFT</Typography>
                        <div className={styles.creator}>
                            <Avatar />
                            <Typography variant="h6" style={{ textDecoration: 'underline', textIndent: 8, alignContent: 'center' }}>
                            @Mike
                            </Typography>
                        </div>
                        <Typography variant="h6">Description</Typography>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing el
                            it. Quo nihil consectetur odit dolor quasi pariatur! Fugit doloremque
                            voluptates, in delectus ipsam laborum ad non be
                            atae? Aliquam sequi beatae
                            voluptatum at.
                        </p>
                        <MetadataSection title="Context" labels={json.context} />
                        <MetadataSection title="Taxonomy" labels={json.taxonomy} />
                        <MetadataSection title="Creators" labels={json.creators} />
                        <MetadataSection title="Provenance" labels={json.provenance} />
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
