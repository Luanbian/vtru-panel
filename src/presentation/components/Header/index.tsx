import React from 'react';

import styles from './index.module.css';

export default function Header(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <a href="/">
                https://store.vitruveo.xyz/preview/artworkID/seo-title
            </a>
            <a href="/">
                https://store.vitruveo.xyz/creator-name/artworkID/seo-title
            </a>
        </main>
    );
}
