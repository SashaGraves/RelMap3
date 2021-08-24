import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';

export const CharacterButton = ({navigation, person, style}: any) => {
  const onPress = () => {
    navigation.push('Dossier', {id: person.id});
  };

  return (
    <View style={(styles.container, style)}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>{person.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
