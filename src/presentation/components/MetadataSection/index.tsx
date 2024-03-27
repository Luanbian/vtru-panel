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
            {labels.map((item, index) => (
                <div key={index}>
                    <h3>{item}</h3>
                </div>
            ))}
        </>
    );
}
