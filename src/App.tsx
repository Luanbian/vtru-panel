import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './presentation/router';
import { ThemeSettings } from './presentation/theme/Theme';

import store, { persistor } from './infra/features/store';

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
            <PersistGate loading={null} persistor={persistor}>
                <ProviderModernize>
                    <Container
                        sx={{
                            paddingBottom: '2rem',
                        }}
                    >
                        <Router />
                    </Container>
                </ProviderModernize>
            </PersistGate>
        </Provider>
    );
}

export default App;
