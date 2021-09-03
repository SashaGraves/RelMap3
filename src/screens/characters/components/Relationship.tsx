import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {CharacterButton} from './CharacterButton';
import {IRelation} from 'types/Person';
import {Color} from 'common/colors';

interface RelationshipProps {
  relation: IRelation;
  style?: StyleProp<ViewStyle>;
}

export const Relationship = ({relation, style}: RelationshipProps) => {
  const {recipient, relationship} = relation;
  console.log(recipient.name, recipient.id);
  return (
    <View style={[styles.view, style]}>
      <Text style={[styles.text, {borderColor: Color.lavander}]}>
        {relationship.to || '-'}
      </Text>
      <CharacterButton
        personName={recipient.name}
        personId={recipient.id || ''}
        style={styles.button}
      />
      <Text style={[styles.text, {borderColor: Color.lilac}]}>
        {relationship.from || '-'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  relContainer: {},
  text: {
    textTransform: 'capitalize',
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1,
    borderWidth: 1,
  },
  button: {
    flex: 1,
  },
});
