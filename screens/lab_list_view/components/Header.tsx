import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9edf0a5faaf787145cef8956caf1431f4e92a425883411a08ea498b1f2be1e93?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0' }}
                style={styles.logo}
            />
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0' }}
                style={styles.avatar}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        minWidth: 240,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 0,
    },
    logo: {
        width: 28,
        height: 35,
        position: 'absolute',
        left: 18,
        top: 15,
        resizeMode: 'contain',
        color: 'black'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        position: 'absolute',
        left: 760,
        top: 15,
        resizeMode: 'contain',
    },
});

export default Header;
