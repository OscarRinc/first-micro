import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NextT from './View/NextT';
import Third from './View/Third';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="NextT"
          component={NextT}
        />
        <Stack.Screen
          name="ThirsdScreen"
          component={Third}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
