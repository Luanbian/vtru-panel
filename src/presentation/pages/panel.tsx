import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';

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
                <Grid item xs={12} sm={12}>
                    <div className={styles.actionsBox}>
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 300,
                                    height: 300,
                                })
                            }
                            title="P"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 400,
                                    height: 200,
                                })
                            }
                            title="O"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 500,
                                    height: 350,
                                })
                            }
                            title="Bi"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 300,
                                    height: 550,
                                })
                            }
                            title="BV"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <section className={styles.rightSection}>
                        <Typography variant="h1">My NFT</Typography>
                        <div className={styles.creator}>
                            <Avatar imageUrl={json.creators.profileUrl} />
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

                        <Accordion defaultExpanded>
                            <AccordionSummary>
                                <Typography variant="h6">Context</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    title="Context"
                                    labels={json.context}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography variant="h6">Creators</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    title="Creators"
                                    labels={json.creators}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography variant="h6">Taxonomy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    title="Taxonomy"
                                    labels={json.taxonomy}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography variant="h6">Provenance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    title="Provenance"
                                    labels={json.provenance}
                                />
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
