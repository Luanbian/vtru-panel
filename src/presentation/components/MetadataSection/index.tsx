import { Typography } from '@mui/material';
import React from 'react';
import { Icontext } from '../../../domain/entitties/context';
import { Icreators } from '../../../domain/entitties/creators';
import { Itaxonomy } from '../../../domain/entitties/taxonomy';
import { Iprovenance } from '../../../domain/entitties/provenance';

type MetadataSectionProps = {
    title: string;
    labels: Icontext | Icreators | Itaxonomy | Iprovenance;
};

export default function MetadataSection({
    title,
    labels,
}: MetadataSectionProps): React.JSX.Element {
    let labelType;
    if (title === 'Context') {
        labelType = labels as Icontext;
        return (
            <>
                <p>Title: {labelType.title}</p>
                <p>Description: {labelType.description}</p>
                <p>Culture: {labelType.culture.join(', ')}</p>
                <p>Mood: {labelType.mood.join(', ')}</p>
                <p>Colors: {labelType.colors}</p>
                <p>Copyright: {labelType.copyright}</p>
                <p>Orientation: {labelType.orientation.join(', ')}</p>
            </>
        );
    }
    if (title === 'Taxonomy') {
        labelType = labels as Itaxonomy;
        return (
            <>
                <p>ObjectType: {labelType.objectType.join(', ')}</p>
                <p>Tags: {labelType.tags}</p>
                <p>Collections: {labelType.collections}</p>
                <p>AiGeneration: {labelType.aiGeneration.join(', ')}</p>
                <p>Arenabled: {labelType.arenabled.join(', ')}</p>
                <p>Nudity: {labelType.nudity.join(', ')}</p>
                <p>Category: {labelType.category.join(', ')}</p>
                <p>Medium: {labelType.medium.join(', ')}</p>
                <p>Style: {labelType.style.join(', ')}</p>
                <p>Subject: {labelType.subject}</p>
            </>
        );
    }
    if (title === 'Creators') {
        labelType = labels as Icreators;
        return (
            <>
                <p>Name: {labelType.name}</p>
                <p>Roles: {labelType.roles}</p>
                <p>Bio: {labelType.bio}</p>

                <p>Ethnicity: {labelType.ethnicity.join(', ')}</p>
                <p>Gender: {labelType.gender.join(', ')}</p>
                <p>Nationality: {labelType.nationality.join(', ')}</p>
                <p>Residence: {labelType.residence.join(', ')}</p>
            </>
        );
    }
    labelType = labels as Iprovenance;
    return (
        <>
            <p>Country: {labelType.country.join(', ')}</p>
            <p>PlusCode: {labelType.plusCode}</p>
            <p>Blockchain: {labelType.blockchain.join(', ')}</p>
            <p>ExibitionName: {labelType.exhibitions.exhibitionName}</p>
            <p>ExibitionUrl: {labelType.exhibitions.exhibitionUrl}</p>
            <p>AwardsName: {labelType.awards.awardName}</p>
            <p>AwardsUrl: {labelType.awards.awardUrl}</p>
        </>
    );
}
