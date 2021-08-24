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
import {TagButton} from './components/TagButton';
import {tags} from 'data/tags';

export const TagList = ({navigation}: any) => (
  <View style={styles.view}>
    <ScrollView style={styles.scrollView}>
      {tags.map((tag, index) => (
        <TagButton
          key={index}
          tag={tag}
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
