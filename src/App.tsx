import * as React from 'react';
const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogInEmptyState from './screens/LogInEmptyState';
import {CarouselPage1} from './screens/CarouselPage1';

const App = () => {
  const [hideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="CarouselPage1"
              component={CarouselPage1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogInEmptyState"
              component={LogInEmptyState}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
