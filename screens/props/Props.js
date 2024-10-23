import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LabListViewScreen = () => {
    constructor(pros) {
        super(props);
        this.state = {
            
        }
    }

    teste(novoCurso) {
        this.setState({
            curso: novoCurso
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Button>Batata</Button>
            </SafeAreaView>
        );
    }
};

export default LabListViewScreen;
