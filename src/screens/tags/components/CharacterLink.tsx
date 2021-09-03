import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PersonsWithTag} from 'types/Tag';
import {Color} from 'common/colors';

interface CharactersLinkProps {
  person: PersonsWithTag;
  style?: StyleProp<ViewStyle>;
  textColor: string;
}

export const CharacterLink = ({
  person,
  style,
  textColor,
}: CharactersLinkProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Characters', {
      screen: 'Dossier',
      params: {personId: person.id},
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={(styles.container, style)}>
      <Text style={[styles.button, {color: textColor}]}>{person.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    textAlign: 'center',
  },
});
