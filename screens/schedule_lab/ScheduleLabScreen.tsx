import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropdownField from './components/DropdownField';

interface AgendamentoScreenProps { }

const ScheduleLabScreen: React.FC<AgendamentoScreenProps> = () => {
    const inputFields = [
        {
            label: 'Dia',
            options: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
        },
        {
            label: 'Hora',
            options: ['08:00', '09:00', '10:00', '11:00', '12:00']
        },
        {
            label: 'Laboratório',
            options: ['Lab 1', 'Lab 2', 'Lab 3']
        },
        {
            label: 'Responsável',
            options: ['Prof. Silva', 'Prof. Lima', 'Prof. Souza']
        },
        {
            label: 'Estudantes',
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
        paddingHorizontal: 30
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
