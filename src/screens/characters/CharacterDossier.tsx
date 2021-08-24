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
import {characters} from 'data/characters';
import {IPerson, IRelation} from 'types/Person';
import {ITag} from 'types/Tag';
import {Relationship} from './components/Relationship';
import {TagLink} from './components/TagLink';

export const Dossier = ({navigation, route}: any) => {
  const {id: personId} = route.params;
  const [person, setPerson] = useState<IPerson>({} as IPerson);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tagList, setTagList] = useState<any[]>();
  const [previousTagList, setPreviousTagList] = useState<any[]>();
  const [relationshipList, setRelationshipList] = useState<any[]>();

  useEffect(() => {
    setIsLoading(true);
    const index = characters.findIndex(item => item.id === personId);
    let foundPerson;
    if (index > -1) {
      foundPerson = characters[index];
      setPerson(foundPerson);

      const tags = foundPerson.tags.map(mapTags);
      setTagList(tags);
      const previousTags = foundPerson.previousTags?.map(mapTags);
      setPreviousTagList(previousTags);
      const relations = foundPerson.relationships.map(mapRelation);
      setRelationshipList(relations);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personId]);

  const mapTags = (tag: string, index: number) => (
    <TagLink key={index} navigation={navigation} tag={tag} />
  );

  const mapRelation = (rel: IRelation, index: number) => (
    <Relationship key={index} navigation={navigation} relationship={rel} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: person.name,
    });
  }, [navigation, person]);

  console.log(tagList);

  return (
    <View style={styles.view}>
      {isLoading ? (
        <Text>Wait fot it...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <Text>{person.description}</Text>
          <View>{tagList}</View>
          {person.previousTags && person.previousTags.length > 0 && (
            <View>{previousTagList}</View>
          )}
          <View>{relationshipList}</View>
          <Button
            onPress={() => navigation.navigate('Avatar gallery')}
            title="Go to avatar gallery"
          />
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
    color: '#593FB5',
    fontSize: 24,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
