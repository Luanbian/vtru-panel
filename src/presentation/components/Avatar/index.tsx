import React, { useState } from 'react';
import styles from './index.module.css';

type AvatarProps = {
    imageUrl?: string
};

const DEFAULT_IMAGE_URL = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';

export default function Avatar({ imageUrl = DEFAULT_IMAGE_URL }: AvatarProps): React.JSX.Element {
    const [image, setImage] = useState(imageUrl);

    const handleError = () => {
        setImage(DEFAULT_IMAGE_URL);
    };

    return (
        <img src={image} alt="avatar" onError={handleError} className={styles.main} />
    );
}
