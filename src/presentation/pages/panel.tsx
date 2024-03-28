import React from 'react';
import { Grid, Typography } from '@mui/material';

import ActionButton from '../components/ActionButton';
import MetadataSection from '../components/MetadataSection';
import Avatar from '../components/Avatar';

import styles from '../styles/panel.module.css';

import json from '../../../a.json';

export default function Panel(): React.JSX.Element {
    const [size, setSize] = React.useState({
        width: 300,
        height: 300,
    });

    return (
        <main className={styles.main}>
            <img
                className={styles.originalImage}
                src="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                alt="original"
                width={size.width}
                height={size.height}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div className={styles.actionsBox}>
                        <ActionButton
                            onClick={() => setSize({
                                width: 300,
                                height: 300,
                            })}
                            title="P"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 400,
                                height: 200,
                            })}
                            title="O"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 500,
                                height: 350,
                            })}
                            title="Bi"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 300,
                                height: 550,
                            })}
                            title="BV"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <section className={styles.rightSection}>
                        <Typography variant="h1">My NFT</Typography>
                        <div className={styles.creator}>
                            <Avatar imageUrl={json.creators.profileUrl} name={json.creators.name} />
                            <Typography
                                variant="h6"
                                style={{
                                    textDecoration: 'underline',
                                    textIndent: 8,
                                    alignContent: 'center',
                                }}
                            >
                                @{json.creators.name}
                            </Typography>
                        </div>

                        <MetadataSection
                            title="Creators"
                            labels={json.creators}
                        />
                        <MetadataSection
                            title="Context"
                            labels={json.context}
                        />
                        <MetadataSection
                            title="Taxonomy"
                            labels={json.taxonomy}
                        />
                        <MetadataSection
                            title="Provenance"
                            labels={json.provenance}
                        />
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
