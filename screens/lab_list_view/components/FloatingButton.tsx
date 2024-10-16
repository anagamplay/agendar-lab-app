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
                source={{ uri: 'https://img.icons8.com/?size=100&id=98&format=png&color=FFFFFF' }}
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
        height: 65,
        width: 65,
        backgroundColor: 'green',
        borderRadius: 75 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    image: {
        height: 30,
        width: 30,
    },
});

export default FloatingButton;