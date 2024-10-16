import React from 'react';
import { ScrollView, View } from 'react-native'; 
import LabCard from './components/LabCard';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import FloatingButton from './components/FloatingButton';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Lab {
  name: string;
  type: string;
}

const labs: Lab[] = [
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
  { name: "Nome do Lab", type: "Hotel Tecnológico"},
];

const LabListViewScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}> 
      <Header />
      <FilterButtons />
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', gap: 8}}> 
        {labs.map((lab, index) => (
          <LabCard key={index} name={lab.name} type={lab.type} />
        ))}
        <View></View>
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};

export default LabListViewScreen;
