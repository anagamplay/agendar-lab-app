import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

interface DropdownFieldProps {
  label: string;
  iconUri: string;
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, iconUri, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setIsOpen(!isOpen)}>
        <View style={styles.labelContainer}>
          <Text>{label}</Text>
          {selectedOption && <Text style={styles.selectedText}>{selectedOption}</Text>}
        </View>
        <Image
          accessibilityLabel={`${label} icon`}
          source={{ uri: iconUri }}
          style={styles.icon}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    minHeight: 48,
    justifyContent: 'space-between',
    zIndex: 2,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  selectedText: {
    marginLeft: 8,
    color: 'black',
  },
  icon: {
    width: 24,
    height: 24,
  },
  optionsContainer: {
    position: 'absolute',
    top: 50, 
    right: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 8,
    maxHeight: 150,
    zIndex: 999,
    elevation: 10,
    overflow: 'visible', 
    width: 300
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default DropdownField;
