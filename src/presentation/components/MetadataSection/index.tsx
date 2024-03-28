import React from 'react';
import { Icontext } from '../../../domain/entitties/context';
import { Icreators } from '../../../domain/entitties/creators';
import { Itaxonomy } from '../../../domain/entitties/taxonomy';
import { Iprovenance } from '../../../domain/entitties/provenance';

type MetadataSectionProps = {
    title?: string;
    labels: Icontext | Icreators | Itaxonomy | Iprovenance;
};

export default function MetadataSection({ labels }: MetadataSectionProps): React.JSX.Element {
    if ('title' in labels) {
        return (
            <>
                <p>Title: {labels.title}</p>
                <p>Description: {labels.description}</p>
                <p>Culture: {labels.culture.join(', ')}</p>
                <p>Mood: {labels.mood.join(', ')}</p>
                <p>Colors: {labels.colors}</p>
                <p>Copyright: {labels.copyright}</p>
                <p>Orientation: {labels.orientation.join(', ')}</p>
            </>
        );
    }
    if ('objectType' in labels) {
        return (
            <>
                <p>ObjectType: {labels.objectType.join(', ')}</p>
                <p>Tags: {labels.tags}</p>
                <p>Collections: {labels.collections}</p>
                <p>AiGeneration: {labels.aiGeneration.join(', ')}</p>
                <p>Arenabled: {labels.arenabled.join(', ')}</p>
                <p>Nudity: {labels.nudity.join(', ')}</p>
                <p>Category: {labels.category.join(', ')}</p>
                <p>Medium: {labels.medium.join(', ')}</p>
                <p>Style: {labels.style.join(', ')}</p>
                <p>Subject: {labels.subject}</p>
            </>
        );
    }
    if ('name' in labels) {
        return (
            <>
                <p>Name: {labels.name}</p>
                <p>Roles: {labels.roles}</p>
                <p>Bio: {labels.bio}</p>
                <p>Ethnicity: {labels.ethnicity.join(', ')}</p>
                <p>Gender: {labels.gender.join(', ')}</p>
                <p>Nationality: {labels.nationality.join(', ')}</p>
                <p>Residence: {labels.residence.join(', ')}</p>
            </>
        );
    }
    return (
        <>
            <p>Country: {labels.country.join(', ')}</p>
            <p>PlusCode: {labels.plusCode}</p>
            <p>Blockchain: {labels.blockchain.join(', ')}</p>
            <p>ExibitionName: {labels.exhibitions.exhibitionName}</p>
            <p>ExibitionUrl: {labels.exhibitions.exhibitionUrl}</p>
            <p>AwardsName: {labels.awards.awardName}</p>
            <p>AwardsUrl: {labels.awards.awardUrl}</p>
        </>
    );
}
