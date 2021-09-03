import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type CharacterStackParamList = {
  'Character List': undefined;
  Dossier: {personId: string};
  'Avatar gallery': undefined;
};

export type CharListNavigationProps = CompositeScreenProps<
  NativeStackScreenProps<CharacterStackParamList, 'Character List'>,
  BottomTabScreenProps<TabParamList, 'Characters'>
>;

export type DossierNavigationProps = CompositeScreenProps<
  NativeStackScreenProps<CharacterStackParamList, 'Dossier'>,
  BottomTabScreenProps<TabParamList, 'Characters'>
>;

export type TagStackParamList = {
  TagList: undefined;
  TagInfo: {title: string};
};

export type TagListNavigationProps = NativeStackScreenProps<
  TagStackParamList,
  'TagList'
>;

export type TagInfoNavigationProps = NativeStackScreenProps<
  TagStackParamList,
  'TagInfo'
>;

export type TabParamList = {
  Characters: NavigatorScreenParams<CharacterStackParamList>;
  Tag: NavigatorScreenParams<TagStackParamList>;
  Map: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}
