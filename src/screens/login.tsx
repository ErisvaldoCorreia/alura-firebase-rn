import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

import { LoginProps } from '~/navigation';

const Login = () => {
  const navigation = useNavigation<LoginProps>();

  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default Login;
