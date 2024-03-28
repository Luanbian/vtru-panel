import React, { useState } from 'react';
import { Avatar as AvatarMui } from '@mui/material';

type AvatarProps = {
    imageUrl?: string
    name?: string
};

const DEFAULT_IMAGE_URL = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';

export default function Avatar({ imageUrl, name }: AvatarProps)
: React.JSX.Element {
    const [error, setError] = useState(false);

    const handleImageError = () => {
        setError(true);
    };

    if (!error && imageUrl) {
        return <AvatarMui src={imageUrl} alt="avatar" onError={handleImageError} />;
    }
    return name
        ? <AvatarMui>{name.toUpperCase().substring(0, 2)}</AvatarMui>
        : <AvatarMui src={DEFAULT_IMAGE_URL} alt="avatar" />;
}
