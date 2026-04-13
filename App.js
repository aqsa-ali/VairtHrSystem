import React from 'react';
import Navigations from './src/services/navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1 }}
        edges={['top', 'bottom']}>
        <Navigations />
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

export default App;
