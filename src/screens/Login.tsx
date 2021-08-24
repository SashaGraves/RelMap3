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
import {useAppDispatch} from 'store/store';
import {loginAction} from 'store/actions';

export const Login = () => {
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(loginAction());
  };

  return (
    <View style={styles.view}>
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
