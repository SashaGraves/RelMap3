import React, {useState, useEffect} from 'react';
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
import {tags} from 'data/tags';
import {ITag} from 'types/Tag';
import {CharacterLink} from 'screens/tags/components/CharacterLink';

export const TagInfo = ({navigation, route}: any) => {
  const {title: tagName} = route.params;
  const [tag, setTag] = useState<ITag>({} as ITag);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: tagName,
    });
  }, [navigation, tagName]);

  return (
    <View style={styles.view}>
      {isLoading ? (
        <Text>Wait fot it...</Text>
      ) : (
        <ScrollView style={styles.scrollView} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: '#593FB5',
    fontSize: 24,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
