import React from 'react';

type MetadataSectionProps = {
    title: string
    labels: string[]
};

export default function MetadataSection({ title, labels }: MetadataSectionProps)
: React.JSX.Element {
    return (
        <>
            <h2>{title}</h2>
            <h3>{labels ? labels[0] : ''}</h3>
        </>
    );
}
