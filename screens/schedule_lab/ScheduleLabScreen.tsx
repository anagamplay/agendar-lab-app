import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropdownField from './components/DropdownField';

interface AgendamentoScreenProps { }

const ScheduleLabScreen: React.FC<AgendamentoScreenProps> = () => {
    const inputFields = [
        {
            label: 'Dia',
            iconUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c6c7122cf2f32b9fe3fc29d3066013979cd01f8c4278caa986e2f00febdd04e2?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0',
            options: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
        },
        {
            label: 'Hora',
            iconUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8c41a8516ef5e72657c8cfb9a45bee8b2ad293562aee50c166a1f7c32fec42e?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0',
            options: ['08:00', '09:00', '10:00', '11:00', '12:00']
        },
        {
            label: 'Laboratório',
            iconUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/509c18b2cefa9a7473c440e30e0412185f01d13368ee127b215fba5fae39e8ac?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0',
            options: ['Lab 1', 'Lab 2', 'Lab 3']
        },
        {
            label: 'Responsável',
            iconUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dad2082b90f34888e25a5098267e4deeca1f53bc0ca30d79b2ce8fb5f3775c8f?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0',
            options: ['Prof. Silva', 'Prof. Lima', 'Prof. Souza']
        },
        {
            label: 'Estudantes',
            iconUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ea7f1e0b1f307d562c4f2ceb062660177db09da420eea2243cbc8e62fba0f97?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0',
            options: ['Estudante 1', 'Estudante 2', 'Estudante 3']
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        accessibilityLabel="Logo"
                        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed9997eb22c23c8ec20f6286e070a0f1e6937abb2485ad7a708a7b2df5dbe7e1?placeholderIfAbsent=true&apiKey=ca70c08a96064cac986bb26766db07c0' }}
                        style={styles.logo}
                    />
                </View>

                {inputFields.map((field, index) => (
                    <DropdownField
                        key={index}
                        label={field.label}
                        iconUri={field.iconUri}
                        options={field.options} 
                        onSelect={(option) => console.log(`${field.label} selecionado: ${option}`)} 
                    />
                ))}

                <TouchableOpacity
                    accessibilityRole="button"
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxWidth: 480,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    innerContainer: {
        flexDirection: 'column',
        paddingTop: 16,
        paddingBottom: 60,
        width: '100%',
        backgroundColor: 'white',
    },
    logoContainer: {
        flexDirection: 'column',
        paddingHorizontal: 14,
        paddingBottom: 12,
        width: '100%',
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    button: {
        gap: 10,
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginTop: 28,
        marginBottom: -12,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: '#2F9E41',
        borderRadius: 8,
        maxWidth: 380,
        minHeight: 44,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ScheduleLabScreen;
