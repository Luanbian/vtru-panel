import React from 'react';

import Card from '@mui/material/Card';
import { customizer } from '../theme/customizer';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export default function AppCard({ children }: Props): React.JSX.Element {
    return (
        <Card
            sx={{ display: 'flex', p: 0 }}
            elevation={customizer.isCardShadow ? 9 : 0}
            variant={!customizer.isCardShadow ? 'outlined' : undefined}
        >
            {children}
        </Card>
    );
}
