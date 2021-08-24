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
import {characters} from 'data/characters';
import {IPerson} from 'types/Person';
import {Relationship} from './components/Relationship';
import {TagButton} from 'screens/tags/components/TagButton';

export const Dossier = ({navigation, route}: any) => {
  const {id: personId} = route.params;
  const [person, setPerson] = useState<IPerson>({} as IPerson);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const index = characters.findIndex(item => item.id === personId);
    if (index > -1) {
      setPerson(characters[index]);
    }
    setIsLoading(false);
  }, [personId]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: person.name,
    });
  }, [navigation, person]);

  console.log(personId);

  return (
    <View style={styles.view}>
      {isLoading ? (
        <Text>Wait fot it...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <Text>{person.description}</Text>
          <View>
            {person.tags.map((tag, index) => (
              <TagButton key={index} navigation={navigation} tag={tag} />
            ))}
          </View>
          {person.previousTags && person.previousTags.length > 0 && (
            <View>
              {person.previousTags.map((tag, index) => (
                <TagButton key={index} navigation={navigation} tag={tag} />
              ))}
            </View>
          )}
          <View>
            {person.relationships.map((rel, index) => (
              <Relationship
                key={index}
                navigation={navigation}
                relationship={rel}
              />
            ))}
          </View>
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
