import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar />
      <View>
        <Text>App Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
