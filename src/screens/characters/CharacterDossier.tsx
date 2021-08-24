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

export const Dossier = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be character dossier</Text>
    <Button
      onPress={() => navigation.push('Dossier')}
      title="Go to another character dossier"
    />
    <Button
      onPress={() => navigation.navigate('Avatar gallery')}
      title="Go to avatar gallery"
    />
    <Button
      onPress={() => navigation.popToTop('Character List')}
      title="Home (navigate)"
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
