import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { makePanel } from './core/factory/panel.factory';
import { ThemeSettings } from './theme/Theme';

interface ProviderModernizeProps {
    children: React.ReactNode;
}

function ProviderModernize({ children }: ProviderModernizeProps) {
    const theme = ThemeSettings();

    return (
        <ThemeProvider
            theme={createTheme({
                ...theme,
                direction: theme.direction,
                palette: theme.palette,
                typography: theme.typography,
                shadows: theme.shadows,
                shape: {
                    borderRadius: theme.shape.borderRadius,
                },
            })}
        >
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

function App(): React.JSX.Element {
    return (
        <ProviderModernize>
            <Container sx={{
                paddingBottom: '2rem',
            }}
            >
                {makePanel({})}
            </Container>
        </ProviderModernize>
    );
}

export default App;
