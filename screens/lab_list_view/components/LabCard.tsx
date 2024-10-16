import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LabCardProps {
    name: string;
    type: string;
    iconSrc: string;
}

const LabCard: React.FC<LabCardProps> = ({ name, type, iconSrc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.type}>{type}</Text>
                    </View>
                    {iconSrc && (
                        <Image
                            source={{ uri: iconSrc }}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        height: 87,
        minWidth: 240,
        width: 394,
    },
    card: {
        backgroundColor: '#E4E4E7',
        borderRadius: 16,
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 19,
        paddingHorizontal: 16,
    },
    textContainer: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
    type: {
        marginTop: 6,
        fontSize: 12,
    },
    icon: {
        width: 30,
        height: 30,
        marginVertical: 'auto',
    },
});

export default LabCard;
