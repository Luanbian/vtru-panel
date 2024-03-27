import { Typography } from '@mui/material';
import React from 'react';

type MetadataSectionProps = {
    title: string
    labels: string[]
};

export default function MetadataSection({ title, labels }: MetadataSectionProps)
: React.JSX.Element {
    return (
        <>
            <Typography variant="h5">{title}</Typography>
            {labels.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
        </>
    );
}
