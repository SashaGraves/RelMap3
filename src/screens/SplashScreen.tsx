import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Settings,
} from 'react-native';

export const SplashScreen = () => (
  <View style={(styles.view, {backgroundColor: '#3FB57F'})}>
    <Text>Hello and welcome in my App!</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
