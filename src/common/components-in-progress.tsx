import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export const Gallery = () => (
  <View style={styles.view}>
    <Text>Here will be avatar gallery</Text>
  </View>
);

export const Map = () => (
  <View style={styles.view}>
    <Text>Here will be Map</Text>
  </View>
);

export const AppSettings = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be App settings</Text>
    <Button
      onPress={() => navigation.push('UserSettings')}
      title="Go to user settings"
    />
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const UserStetings = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be User settings</Text>
    <Button
      onPress={() => navigation.goBack('AppSettings')}
      title="Go to app settings"
    />
  </View>
);
