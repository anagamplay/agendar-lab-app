import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FloatingButton: React.FC = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ScheduleLab'); 
    };

    return (
        <TouchableOpacity
            style={styles.button}
            accessibilityLabel="Add new lab"
            onPress={handlePress}
        >
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4123971d0aa8bc920f0e4f0e680364325c3cdbef20bc5da2702fc6bbe92a2bb6?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0' }}
                style={styles.image}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 90,
        right: 20,
        height: 75,
        width: 75,
        backgroundColor: 'green',
        borderRadius: 75 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    image: {
        height: 50,
        width: 50,
    },
});

export default FloatingButton;
