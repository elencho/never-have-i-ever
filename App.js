
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Home from './components/Home'
import Questions from './components/Questions'
import QuestionsAdult from './components/QuestionsAdult'
import QuestionsTeens from './components/QuestionsTeens'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="QuestionsAdult" component={QuestionsAdult} />
      <Stack.Screen name="QuestionsTeens" component={QuestionsTeens} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
