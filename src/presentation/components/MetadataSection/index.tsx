import React from 'react';
import { Icontext } from '../../../domain/entitties/context';
import { Icreators } from '../../../domain/entitties/creators';
import { Itaxonomy } from '../../../domain/entitties/taxonomy';
import { Iprovenance } from '../../../domain/entitties/provenance';

type MetadataSectionProps = {
    title?: string;
    labels: Icontext | Icreators[] | Itaxonomy | Iprovenance;
};

export default function MetadataSection({ labels }: MetadataSectionProps): React.JSX.Element {
    if ('title' in labels) {
        return (
            <>
                <p>Title: {labels.title}</p>
                <p>Description: {labels.description}</p>
                <p>Culture: {labels.culture}</p>
                <p>Mood: {labels.mood.join(', ')}</p>
                <p>Colors: {labels.colors}</p>
                <p>Copyright: {labels.copyright}</p>
                <p>Orientation: {labels.orientation}</p>
            </>
        );
    }
    if ('objectType' in labels) {
        return (
            <>
                <p>ObjectType: {labels.objectType}</p>
                <p>Tags: {labels.tags.join(', ')}</p>
                <p>Collections: {labels.collections.join(', ')}</p>
                <p>AiGeneration: {labels.aiGeneration}</p>
                <p>Arenabled: {labels.arenabled}</p>
                <p>Nudity: {labels.nudity}</p>
                <p>Category: {labels.category}</p>
                <p>Medium: {labels.medium.join(', ')}</p>
                <p>Style: {labels.style.join(', ')}</p>
                <p>Subject: {labels.subject.join(', ')}</p>
            </>
        );
    }
    if (Array.isArray(labels)) {
        return (
            <>
                {labels.map((item) => (
                    <>
                        <p>Name: {item.name}</p>
                        <p>Roles: {item.roles.join(', ')}</p>
                        <p>Bio: {item.bio}</p>
                        <p>Nationality: {item.nationality}</p>
                        <p>ProfileUrl: {item.profileUrl}</p>
                    </>
                ))}
            </>
        );
    }
    return (
        <>
            <p>Country: {labels.country}</p>
            <p>Blockchain: {labels.blockchain}</p>
            <p>ExibitionName: {labels.exhibitions.join(', ')}</p>
            <p>AwardsName: {labels.awards.join(', ')}</p>
        </>
    );
}
