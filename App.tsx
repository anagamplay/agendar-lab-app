import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LabListViewScreen from './screens/lab_list_view/LabListViewScreen';
import ScheduleLabScreen from './screens/schedule_lab/ScheduleLabScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LabListView" options={{ headerShown: false }} component={LabListViewScreen} />
        <Stack.Screen name="ScheduleLab" component={ScheduleLabScreen} options={{ title: '', headerShadowVisible: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

export default App;