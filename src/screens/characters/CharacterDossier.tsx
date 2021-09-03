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
import {DossierNavigationProps} from 'types/Navigation';
import {Relationship} from './components/Relationship';
import {TagLink} from './components/TagLink';
import {Color} from 'common/colors';

export const Dossier = ({navigation, route}: DossierNavigationProps) => {
  const {personId} = route.params;
  const [person, setPerson] = useState<IPerson | null>(null);
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

      const tags = foundPerson.tags.current?.map(tag =>
        mapTags(tag, Color.lavander),
      );
      if (tags) {
        setTagList(tags);
      }
      const previoustags = foundPerson.tags.previous?.map(tag =>
        mapTags(tag, Color.lightGray),
      );
      if (previoustags) {
        setPreviousTagList(previoustags);
      }
      const relations = foundPerson.relation.map(mapRelation);
      setRelationshipList(relations);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personId]);

  const mapTags = (tag: string, textColor: string) => (
    <TagLink key={tag} tag={tag} style={styles.tag} textColor={textColor} />
  );

  const mapRelation = (rel: IRelation, index: number) => (
    <Relationship key={index} relation={rel} style={styles.relationship} />
  );

  useLayoutEffect(() => {
    if (person) {
      navigation.setOptions({
        title: person.name,
      });
    }
  }, [navigation, person]);

  return (
    <View style={styles.view}>
      {isLoading && <Text>Wait fot it...</Text>}
      {!person ? (
        <Text>This character is not in library yet. Create dossier? </Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          {!!person.description && (
            <View style={[styles.descriptionContainer, styles.gap]}>
              <Text>Description:</Text>
              <Text>{person.description}</Text>
            </View>
          )}
          <View style={[styles.taglist, styles.gap]}>
            {person.tags.current && person.tags.current.length > 0 && (
              <View style={styles.tagsRow}>{tagList}</View>
            )}

            {person.tags.previous && person.tags.previous.length > 0 && (
              <View style={styles.tagsRow}>{previousTagList}</View>
            )}
          </View>
          <View style={[styles.relationshipHeader, styles.gap]}>
            <Text style={[styles.relHeaderText, {borderColor: Color.lavander}]}>
              {person.name}'s relation
            </Text>
            <View style={{flex: 1}} />
            <Text style={[styles.relHeaderText, {borderColor: Color.lilac}]}>
              Their relation to {person.name}
            </Text>
          </View>
          <View>{relationshipList}</View>
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
  gap: {
    marginVertical: 10,
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: Color.lavander,
    borderRadius: 10,
  },
  scrollView: {
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  taglist: {
    backgroundColor: '#cccccc',
    padding: 10,
    borderRadius: 10,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tag: {
    marginEnd: 15,
  },
  relationship: {
    marginVertical: 5,
  },
  relationshipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  relHeaderText: {
    flex: 1,
    borderColor: Color.lavander,
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
