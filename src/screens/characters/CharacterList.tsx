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

export const CharacterList = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be character list</Text>
    <Button
      onPress={() => navigation.navigate('Dossier')}
      title="Go to character dossier"
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
