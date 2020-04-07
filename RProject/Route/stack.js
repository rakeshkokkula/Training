import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewList from '../CRUD/ViewList';
import ContactUs from '../Demo/contactUs';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ViewList" component={ViewList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;