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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CharacterList = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be character list</Text>
    <Button
      onPress={() => navigation.navigate('Dossier')}
      title="Go to character dossier"
    />
  </View>
);

const Dossier = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be character dossier</Text>
    <Button
      onPress={() => navigation.push('Dossier')}
      title="Go to another character dossier"
    />
    <Button
      onPress={() => navigation.navigate('Avatar gallery')}
      title="Go to avatar gallery"
    />
    <Button
      onPress={() => navigation.popToTop('Character List')}
      title="Home (navigate)"
    />
  </View>
);

const Gallery = () => (
  <View style={styles.view}>
    <Text>Here will be avatar gallery</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Character List">
        <Stack.Screen
          name="Character List"
          component={CharacterList}
          options={{title: 'Characters'}}
        />
        <Stack.Screen
          name="Dossier"
          component={Dossier}
          options={{title: "Ann's dossier"}}
        />
        <Stack.Screen
          name="Avatar gallery"
          component={Gallery}
          options={{title: 'Choose avatar'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
