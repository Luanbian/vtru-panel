import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IconCaretDown } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import MetadataSection from '../components/MetadataSection';
import Avatar from '../components/Avatar';
import styles from '../styles/panel.module.css';
import json from '../../../a.json';
import { IobtainAssets } from '../../data/protocols/obtain.assets.protocol';
import { actions } from '../../features/assets/slice';

type PanelProps = {
    obtainAssets: IobtainAssets;
};

export default function Panel({ obtainAssets }: PanelProps): React.JSX.Element {
    const dispatch = useDispatch();

    const [size, setSize] = useState({
        width: 300,
        height: 300,
    });
    const [text, setText] = useState('');

    const asset = useSelector((state) => state.asset.asset);

    useEffect(() => {
        // const onMounted = async () => {
        //     const data = await obtainAssets.perform({
        //         id: '6601adc7dc55cca07532d16f',
        //     });
        //     setText(JSON.stringify(data.body));
        // };
        // onMounted();
        dispatch(
            actions.getAssetRequest({
                id: '6601adc7dc55cca07532d16f',
            }),
        );
    }, [obtainAssets]);

    return (
        <main className={styles.main}>
            <img
                className={styles.originalImage}
                src="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                alt="original"
                width={size.width}
                height={size.height}
            />
            <p>{text}</p>
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
                            title="Preview"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 400,
                                    height: 200,
                                })
                            }
                            title="Original"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 500,
                                    height: 350,
                                })
                            }
                            title="Bi"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() =>
                                setSize({
                                    width: 300,
                                    height: 550,
                                })
                            }
                            title="BV"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <section className={styles.rightSection}>
                        <Typography variant="h1">My NFT</Typography>
                        <div className={styles.creator}>
                            <Avatar
                                imageUrl={json.creators.profileUrl}
                                name={json.creators.name}
                            />
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
                                <MetadataSection labels={json.context} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Creators</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection labels={json.creators} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Taxonomy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection labels={json.taxonomy} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Provenance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MetadataSection labels={json.provenance} />
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
