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
import {CharacterButton} from './components/CharacterButton';
import {characters} from 'data/characters';

export const CharacterList = ({navigation}: any) => (
  <View style={styles.view}>
    <ScrollView style={styles.scrollView}>
      {characters.map(person => (
        <CharacterButton
          key={person.id}
          person={person}
          navigation={navigation}
          style={styles.listItem}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  listItem: {
    marginVertical: 5,
  },
});
