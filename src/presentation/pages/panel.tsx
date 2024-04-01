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
import { useParams } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import MetadataSection from '../components/MetadataSection';
import Avatar from '../components/Avatar';
import styles from '../styles/panel.module.css';
import { actions } from '../../features/assets/slice';

export default function Panel(): React.JSX.Element {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const [size, setSize] = useState({
        width: 300,
        height: 300,
    });

    const asset = useSelector((state) => state.asset.asset);

    useEffect(() => {
        if (asset._id === '') {
            dispatch(
                actions.getAssetRequest({ id }),
            );
        }
    }, [asset, dispatch, id]);

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
                            title="Preview"
                            imageUrl="https://wallpapers.com/images/hd/nft-pictures-s01o3iv3xhglpfzl.jpg"
                        />
                        <ActionButton
                            onClick={() => setSize({
                                width: 400,
                                height: 200,
                            })}
                            title="Original"
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
                        {asset && asset.assetMetadata && (
                            <>
                                {asset.assetMetadata.creators.formData.map((item, index) => (
                                    <div className={styles.creator} key={index}>
                                        <Avatar
                                            imageUrl={item.profileUrl}
                                            name={item.name}
                                        />
                                        <Typography
                                            variant="h6"
                                            style={{
                                                textDecoration: 'underline',
                                                textIndent: 8,
                                                alignContent: 'center',
                                            }}
                                        >
                                            @{item.name}
                                        </Typography>
                                    </div>
                                ))}
                            </>
                        )}
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Context</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {asset && asset.assetMetadata && (
                                    <MetadataSection
                                        labels={asset.assetMetadata.context.formData}
                                    />
                                )}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Creators</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {asset && asset.assetMetadata && (
                                    <MetadataSection
                                        labels={asset.assetMetadata.creators.formData}
                                    />
                                )}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Taxonomy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {asset && asset.assetMetadata && (
                                    <MetadataSection
                                        labels={asset.assetMetadata.taxonomy.formData}
                                    />
                                )}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<IconCaretDown />}>
                                <Typography variant="h6">Provenance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {asset && asset.assetMetadata && (
                                    <MetadataSection
                                        labels={asset.assetMetadata.provenance.formData}
                                    />
                                )}
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </Grid>
        </main>
    );
}
