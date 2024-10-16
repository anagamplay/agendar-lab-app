import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

const FilterChipGroup: React.FC = () => {
    return (
        <View style={styles.container}>
            <Chip
                compact={true}
                showSelectedCheck={false}
                selected style={styles.chipActive}
                textStyle={{ color: 'white' }}>
                Tudo
            </Chip>
            <Chip
                compact={true}
                style={styles.chip}>
                Hotel Tec.
            </Chip>
            <Chip
                compact={true}
                style={styles.chip}>
                IF Maker
            </Chip>
            <Chip
                compact={true}
                showSelectedCheck={false}
                style={styles.chip}>
                Eletrotécnica
            </Chip>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        padding: 10,
        flexWrap: 'wrap',
        minHeight: 50,
    },
    chipActive: {
        backgroundColor: 'green',
        borderRadius: 20,
        paddingHorizontal: 3,
    },
    chip: {
        backgroundColor: '#D1D5DB',
        borderRadius: 20,
        paddingHorizontal: 3,
    },
});

export default FilterChipGroup;
