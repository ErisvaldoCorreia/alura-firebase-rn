import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Button, View } from 'react-native';

import { auth } from '~/config/firebase';
import { LoginProps } from '~/navigation';

const Login = () => {
  const navigation = useNavigation<LoginProps>();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, 'teste@email.com', '123456')
      .then((user) => {
        console.log(user);
        navigation.navigate('Home');
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Button title="Login" onPress={createUser} />
      <View style={{ height: 24 }} />
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default Login;
