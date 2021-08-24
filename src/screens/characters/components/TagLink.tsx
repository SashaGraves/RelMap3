import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export const TagLink = ({navigation, tag}: any) => {
  const onPress = () =>
    navigation.navigate('Tag', {screen: 'TagInfo', params: {title: tag}});

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.link}>
          <Text style={styles.text}>{tag}</Text>
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
  link: {
    alignItems: 'center',
    backgroundColor: '#aaaaaa',
    padding: 10,
  },
  text: {
    color: '#666666',
  },
});
