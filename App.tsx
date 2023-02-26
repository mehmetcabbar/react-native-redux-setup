import { Provider } from 'react-redux';
import { store } from './src/state';
import HomeScreen from './src/components/pages/home/HomeScreen';


const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
