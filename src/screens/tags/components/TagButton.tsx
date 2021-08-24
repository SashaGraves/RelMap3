import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export const TagButton = ({navigation, tag, style}: any) => {
  const onPress = () => navigation.push('Tag info', {name: tag.name});

  return (
    <View style={(styles.container, style)}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>{tag}</Text>
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
