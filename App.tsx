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

import {Login} from 'screens/Login';
import {SplashScreen} from 'screens/SplashScreen';
import {CharacterList} from 'screens/characters/CharacterList';
import {TagList} from 'screens/tags/TagList';
import {TagInfo} from 'screens/tags/TagInfo';
import {Dossier} from 'screens/characters/CharacterDossier';

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
      options={{title: 'Person'}}
    />
    <CharacterNavigator.Screen
      name="Avatar gallery"
      component={Gallery}
      options={{title: 'Choose avatar'}}
    />
  </CharacterNavigator.Navigator>
);

const TagNavigator = createNativeStackNavigator();

const TagStack = () => (
  <TagNavigator.Navigator initialRouteName="TagList">
    <TagNavigator.Screen
      name="TagList"
      component={TagList}
      options={{title: 'Tags'}}
    />
    <TagNavigator.Screen
      name="TagInfo"
      component={TagInfo}
      options={{title: 'Tag'}}
    />
  </TagNavigator.Navigator>
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

const LoginNavigator = createNativeStackNavigator();

const App = () => {
  const state = {
    isLoading: false,
    userToken: true,
  };
  if (state.isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {!state.userToken ? (
        <LoginNavigator.Navigator>
          <LoginNavigator.Screen name="Login" component={Login} />
        </LoginNavigator.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Characters" component={CharacterStack} />
          <Tab.Screen name="Tag" component={TagStack} />
          <Tab.Screen name="Map" component={MapStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      )}
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
