import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';

const Onboarding1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <Text style={styles.title}>
                    Welcome to QuickShift! Find daily jobs and start earning now with just a tap.
                </Text>
            </View>
            <View style={styles.middleSection}>
                <Image
                    source={require('../assets/Images/Onboarding1.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.stepsIndicator}>
                    <View style={styles.rectangle} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('Screen3')}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    upperSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    middleSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    stepsIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        margin: 5,
    },
    rectangle: {
        width: 20,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        margin: 5,
    },
    nextButton: {
        backgroundColor: '#ff0000',
        borderRadius: 25,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Onboarding1;
