/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from './src/store';
import 'react-native-gesture-handler';
// import Login from './src/Views/Login';
import SignUp from './src/Screens/Auth/SignUp';
import AuthLoading from './src/Navigation';


const App= () => {
 //this will be required for pwd input
  // const [secureEntry,setEscureEntry] = React.useState(true);
  
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
     <AuthLoading/>
      
    </PersistGate>
    </Provider>
  );
};

export default App;




// import {Text,TouchableOpacity,View} from 'react-native';
// import Input from './src/Components/Input';
// import CustomButton from './src/Components/CustomButton';
// import AppModal from './src/Components/AppModal';



