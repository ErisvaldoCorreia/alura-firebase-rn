import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import Home from '~/screens/home';
import Login from '~/screens/login';
import SingUp from '~/screens/signup';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type HomeProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type LoginProps = StackNavigationProp<RootStackParamList, 'Login'>;
export type SignUpProps = StackNavigationProp<RootStackParamList, 'SignUp'>;

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SingUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
