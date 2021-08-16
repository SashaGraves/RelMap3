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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

const Map = () => (
  <View style={styles.view}>
    <Text>Here will be Map</Text>
  </View>
);

const AppSettings = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be App settings</Text>
    <Button
      onPress={() => navigation.push('UserSettings')}
      title="Go to user settings"
    />
  </View>
);

const UserStetings = ({navigation}: any) => (
  <View style={styles.view}>
    <Text>Here will be User settings</Text>
    <Button
      onPress={() => navigation.goBack('AppSettings')}
      title="Go to app settings"
    />
  </View>
);

const CharacterNavigator = createNativeStackNavigator();

const CharacterStack = () => (
  <CharacterNavigator.Navigator initialRouteName="Character List">
    <CharacterNavigator.Screen
      name="Character List"
      component={CharacterList}
      options={{title: 'Characters'}}
    />
    <CharacterNavigator.Screen
      name="Dossier"
      component={Dossier}
      options={{title: "Ann's dossier"}}
    />
    <CharacterNavigator.Screen
      name="Avatar gallery"
      component={Gallery}
      options={{title: 'Choose avatar'}}
    />
  </CharacterNavigator.Navigator>
);

const MapNavigator = createNativeStackNavigator();

const MapStack = () => (
  <MapNavigator.Navigator>
    <MapNavigator.Screen
      name="Map"
      component={Map}
      options={{title: 'Relation map'}}
    />
  </MapNavigator.Navigator>
);

const SettingsNavigator = createNativeStackNavigator();

const SettingsStack = () => (
  <SettingsNavigator.Navigator>
    <SettingsNavigator.Screen
      name="AppSettings"
      component={AppSettings}
      options={{title: 'Settings for app'}}
    />
    <SettingsNavigator.Screen
      name="UserSettings"
      component={UserStetings}
      options={{title: 'Settings for user'}}
    />
  </SettingsNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharacterStack} />
        <Tab.Screen name="Map" component={MapStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
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
