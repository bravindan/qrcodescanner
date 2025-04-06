import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Alert} from "react-native";
import "../../global.css";
import {CameraView,  useCameraPermissions} from "expo-camera";
import {useState} from "react";


export default function Index() {

    const [permission, requestPermission] = useCameraPermissions();
    const [scanResult, setScanResult] = useState(null);
    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                {/*Alert.alert('Grant Permission', 'We need your permission to show the camera')*/}
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <CameraView style={styles.camera}
                barcodeScannerSettings={{ barcodeTypes: ['aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a'] }}
                onBarcodeScanned={({data}) => {
                    setScanResult(data);
                    console.log('Scanned barcode:', scanResult);
                }}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                                      // onPress={toggleCameraFacing}
                    >
                        {/*<Text style={styles.text}>Flip Camera</Text>*/}
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

