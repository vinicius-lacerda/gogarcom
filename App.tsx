import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from '@hooks/auth';

import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {
  const [loaded] = useFonts({
    DMSans_400Regular: require('@assets/fonts/DM_Sans/DMSans-Regular.ttf'),
    DMSerifDisplay_400Regular: require('@assets/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </AuthProvider>
    </ThemeProvider>
  );
}

