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
  iconSrc: string;
}

const labs: Lab[] = [
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/44ea26f38630ac3fe780fd9aa8f25c902ab53be42fa2cac905883d7ca3efcfb4?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/60871fac6f3b37d8d3bd0f57b75199b7e4f81d1aacf296172e9d862269cc3ec0?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb8cdcd0c30abfbc512ceb22e6e8eaa12aa7eec527cb95032475c52578432df2?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3007734c7e7ac33f9457a598c76cc1f72dacb8d9640bd78bf2bc681c72d07c1?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcefd0d407a5e1ef34c8aa8a9545de95101b94dd824b4b5c54944620e389ba13?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73ecfa0a415779d144381a94c84d5859f91a549c58ace8dd612310114b6f4336?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "" },
  { name: "Nome do Lab", type: "Hotel Tecnológico", iconSrc: "" },
];

const LabListViewScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}> 
      <Header />
      <FilterButtons />
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', gap: 8 }}> 
        {labs.map((lab, index) => (
          <LabCard key={index} name={lab.name} type={lab.type} iconSrc={lab.iconSrc} />
        ))}
        <View></View>
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};

export default LabListViewScreen;
