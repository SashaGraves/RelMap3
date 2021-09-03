import React, {useState, useEffect, useLayoutEffect} from 'react';
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
import {ITag, PersonsWithTag} from 'types/Tag';
import {TagInfoNavigationProps} from 'types/Navigation';
import {CharacterLink} from 'screens/tags/components/CharacterLink';
import {Color} from 'common/colors';

export const TagInfo = ({navigation, route}: TagInfoNavigationProps) => {
  const {title: tagName} = route.params;
  const [tag, setTag] = useState<ITag>({} as ITag);
  const [tagPersons, setTagPersons] = useState<any[]>();
  const [previousPersons, setPreviousPersons] = useState<any[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const index = tags.findIndex(item => item.name === tagName);
    let foundTag;
    if (index > -1) {
      foundTag = tags[index];
      setTag(foundTag);

      const personArray = foundTag.personIdArray.map(tag =>
        mapPersonToTag(tag, Color.lilac),
      );
      setTagPersons(personArray);

      const previousPersonArray = foundTag.previousIdArray.map(tag =>
        mapPersonToTag(tag, Color.lightGray),
      );
      setPreviousPersons(previousPersonArray);
    }
    setIsLoading(false);
  }, [tagName]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Tag: ${tagName}`,
    });
  }, [navigation, tagName]);

  const mapPersonToTag = (person: PersonsWithTag, color: string) => (
    <CharacterLink
      person={person}
      style={styles.characterLink}
      textColor={color}
    />
  );

  return (
    <View style={styles.view}>
      {isLoading && <Text>Wait fot it...</Text>}
      {!tag ? (
        <Text>No tag. Create one?</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>{tagName}</Text>
          <View style={styles.container}>
            <View style={[styles.charactersList, styles.gap]}>
              <Text>Characters with this tag:</Text>
              {tagPersons}
            </View>
            <View style={[styles.charactersList, styles.gap]}>
              <Text>Characters was with this tag:</Text>
              {previousPersons}
            </View>
          </View>
        </ScrollView>
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
    color: Color.lavander,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  gap: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  charactersList: {
    borderWidth: 1,
    borderColor: Color.lavander,
    borderRadius: 10,
    flexDirection: 'column',
    padding: 10,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  characterLink: {
    marginVertical: 5,
  },
});
