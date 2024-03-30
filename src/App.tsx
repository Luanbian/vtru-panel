import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import makePanel from './core/factories/pages/panel.factory';
import { ThemeSettings } from './theme/Theme';

import store from './features/store';

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
        <Provider store={store}>
            <ProviderModernize>
                <Container
                    sx={{
                        paddingBottom: '2rem',
                    }}
                >
                    {makePanel()}
                </Container>
            </ProviderModernize>
        </Provider>
    );
}

export default App;
