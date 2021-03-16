import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { StudentScreen } from './StudentScreen';
import {SurveyScreen} from './SurveyScreen';
import {Submitted} from './submitted';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: '#2643BE',
  },
}

function App() {
  return (
    <PaperProvider theme = {theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown: true
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Survey" component={SurveyScreen} />
          <Stack.Screen name="Student" component={StudentScreen} />
          <Stack.Screen name="Submitted" component={Submitted} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

    
  );
}

export default App;
