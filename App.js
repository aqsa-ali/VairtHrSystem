import React from 'react';
import Navigations from './src/services/navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { persistor, store } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView
            style={{ flex: 1 }}
            edges={['top', 'bottom']}>
            <Navigations />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
};

export default App;
