import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
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
        <Stack.Screen
          name="LabListView"
          options={{ headerShown: false }}
          component={LabListViewScreen}
        />
        <Stack.Screen
          name="ScheduleLab"
          component={ScheduleLabScreen}
          options={({ navigation }) => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                <Image
                  source={{ uri: 'https://img.icons8.com/?size=100&id=83981&format=png&color=000000' }}
                  style={{ width: 28, height: 28 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
