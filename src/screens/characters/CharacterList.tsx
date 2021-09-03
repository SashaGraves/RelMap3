import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CharacterButton} from './components/CharacterButton';
import {characters} from 'data/characters';

export const CharacterList = () => {
  const buttonsList = characters.map(person => (
    <CharacterButton
      key={person.id}
      personName={person.name}
      personId={person.id}
      style={styles.listItem}
    />
  ));
  return (
    <View style={styles.view}>
      <ScrollView style={styles.scrollView}>{buttonsList}</ScrollView>
    </View>
  );
};
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
