import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';
import { IconCaretDown } from '@tabler/icons-react';

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
                            onClick={() => setSize({
                                width: 300,
                                height: 300,
                            })}
                            title="P"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 400,
                                height: 200,
                            })}
                            title="O"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 500,
                                height: 350,
                            })}
                            title="Bi"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 300,
                                height: 550,
                            })}
                            title="BV"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
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

                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Context</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    labels={json.context}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Creators</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    labels={json.creators}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Taxonomy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
                                    labels={json.taxonomy}
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Provenance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection
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
