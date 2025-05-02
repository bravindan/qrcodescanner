import {Text, TouchableOpacity, View, StyleSheet, Alert} from "react-native";
import "../../global.css";
import {CameraView, useCameraPermissions} from "expo-camera";
import {useState, useEffect} from "react";
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        if (scanResult) {
            const storeScanResult = async () => {
                try {
                    await AsyncStorage.setItem('scanResult', scanResult);
                    console.log('Scan result saved to AsyncStorage:', scanResult);
                } catch (error) {
                    console.error('Failed to save scan result:', error);
                }
            };
            storeScanResult();
        }
    }, [scanResult]);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                barcodeScannerSettings={{
                    barcodeTypes: [
                        'aztec',
                        'ean13',
                        'ean8',
                        'qr',
                        'pdf417',
                        'upc_e',
                        'datamatrix',
                        'code39',
                        'code93',
                        'itf14',
                        'codabar',
                        'code128',
                        'upc_a',
                    ],
                }}
                onBarcodeScanned={({data}) => {
                    if (data) {
                        setScanResult(data);
                        Linking.openURL(data).catch(err => {
                            Alert.alert('Invalid URL', 'The scanned code is not a valid URL.');
                        });
                    }
                }}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        {/* Placeholder for additional functionality */}
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
