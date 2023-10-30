import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './context/store';
export default function App() {
  return (

    <Provider store={store}>

      <AppNavigator/>

    </Provider>

    
  )
    

}

