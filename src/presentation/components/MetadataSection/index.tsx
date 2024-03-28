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
    let labelType;
    if (title === 'Context') {
        labelType = labels as Icontext;
        return (
            <>
                <Typography variant="h5">{title}</Typography>
                <p>Title: {labelType.title}</p>
                <p>Description: {labelType.description}</p>
                <p>culture: {labelType.culture.join(', ')}</p>
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
                <Typography variant="h5">{title}</Typography>
                <p>ObjectType: {labelType.objectType.join(', ')}</p>
                <p>Tags: {labelType.tags}</p>
                <p>Collections: {labelType.collections}</p>
                <p>aiGeneration: {labelType.aiGeneration.join(', ')}</p>
                <p>arenabled: {labelType.arenabled.join(', ')}</p>
                <p>nudity: {labelType.nudity.join(', ')}</p>
                <p>category: {labelType.category.join(', ')}</p>
                <p>medium: {labelType.medium.join(', ')}</p>
                <p>style: {labelType.style.join(', ')}</p>
                <p>subject: {labelType.subject}</p>
            </>
        );
    }
    if (title === 'Creators') {
        labelType = labels as Icreators;
        return (
            <>
                <Typography variant="h5">{title}</Typography>
                <p>name: {labelType.name}</p>
                <p>roles: {labelType.roles}</p>
                <p>bio: {labelType.bio}</p>
                <span>Profile:</span>
                <img src={labelType.profileUrl} alt="profile" style={{ width: '40px' }} />
                <p>ethnicity: {labelType.ethnicity.join(', ')}</p>
                <p>gender: {labelType.gender.join(', ')}</p>
                <p>nationality: {labelType.nationality.join(', ')}</p>
                <p>residence: {labelType.residence.join(', ')}</p>
            </>
        );
    }
    labelType = labels as Iprovenance;
    return (
        <>
            <Typography variant="h5">{title}</Typography>
            <p>country: {labelType.country.join(', ')}</p>
            <p>plusCode: {labelType.plusCode}</p>
            <p>blockchain: {labelType.blockchain.join(', ')}</p>
            <p>exibitionName: {labelType.exhibitions.exhibitionName}</p>
            <p>exibitionUrl: {labelType.exhibitions.exhibitionUrl}</p>
            <p>awardsName: {labelType.awards.awardName}</p>
            <p>awardsUrl: {labelType.awards.awardUrl}</p>
        </>
    );
}
