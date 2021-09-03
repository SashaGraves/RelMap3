import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {CharListNavigationProps} from 'types/Navigation';
import {useNavigation} from '@react-navigation/native';

interface ButtonProps {
  personName: string;
  personId: string;
  style?: ViewStyle;
}

export const CharacterButton = ({personName, personId, style}: ButtonProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.push('Dossier', {personId: personId});
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.button}>
        <Text>{personName}</Text>
      </View>
    </TouchableOpacity>
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
