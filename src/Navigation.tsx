import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppSelector} from 'store/store';
import {
  CharacterStackParamList,
  TagStackParamList,
  TabParamList,
} from 'types/Navigation';
import {Login} from 'screens/Login';
import {CharacterList} from 'screens/characters/CharacterList';
import {TagList} from 'screens/tags/TagList';
import {TagInfo} from 'screens/tags/TagInfo';
import {Dossier} from 'screens/characters/CharacterDossier';
import {
  Map,
  Gallery,
  AppSettings,
  UserStetings,
} from 'common/components-in-progress';

const CharacterNavigator =
  createNativeStackNavigator<CharacterStackParamList>();

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

const TagNavigator = createNativeStackNavigator<TagStackParamList>();

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

const Tab = createBottomTabNavigator<TabParamList>();

const LoginNavigator = createNativeStackNavigator();

const Navigation = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  return (
    <NavigationContainer>
      {!isLogged ? (
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

export default Navigation;
