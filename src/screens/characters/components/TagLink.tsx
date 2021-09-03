import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface TagLinkProps {
  tag: string;
  style: StyleProp<ViewStyle>;
  textColor: string;
}

export const TagLink = ({tag, style, textColor}: TagLinkProps) => {
  const navigation = useNavigation();

  const onPress = () =>
    navigation.navigate('Tag', {screen: 'TagInfo', params: {title: tag}});

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[styles.text, {color: textColor}]}>{tag}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#666666',
    fontSize: 18,
  },
});
