import { Typography } from '@mui/material';
import React from 'react';
import { Icontext } from '../../../domain/entitties/context';
import { Icreators } from '../../../domain/entitties/creators';
import { Itaxonomy } from '../../../domain/entitties/taxonomy';
import { Iprovenance } from '../../../domain/entitties/provenance';

type MetadataSectionProps = {
    title: string
    labels: Icontext | Icreators | Itaxonomy | Iprovenance
};

export default function MetadataSection({ title, labels }: MetadataSectionProps)
: React.JSX.Element {
    return (
        <>
            <Typography variant="h5">{title}</Typography>
            <p>{JSON.stringify(labels)}</p>
        </>
    );
}
