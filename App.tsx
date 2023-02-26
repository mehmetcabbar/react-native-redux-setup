import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/state';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar />
        <View>
          <Text>Redux setup is done</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
