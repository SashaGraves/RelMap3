import React from 'react';
import {View, Text} from 'react-native';
import {CharacterButton} from './CustomButton';

export const Relationship = ({relationship, navigation}: any) => {
  return (
    <View>
      <CharacterButton
        navigation={navigation}
        person={relationship.to || relationship.from}
      />
      <Text>{relationship.rel}</Text>
    </View>
  );
};
