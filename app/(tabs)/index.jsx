import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import "../../global.css";
import {CameraView, CameraType, useCameraPermissions} from "expo-camera";
import {useState} from "react";

export default function Index() {
  // const [permission, requestPermission] = useCameraPermissions();
  //
  // if(!permission) {
  //   return <Text>No access to camera</Text>;
  // }
  //
  // if (!permission.granted) {
  //   // Camera permissions are not granted yet.
  //   return (
  //     <View className="flex-1 items-center justify-center">
  //       <Text className="text-lg font-bold">We need your permission to show the camera</Text>
  //       <TouchableOpacity onPress={requestPermission} className="bg-gray-800 rounded-lg p-2 mt-4">
  //         <Text className="text-white font-bold">Grant permission</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
  //
  // return (
  //   <SafeAreaView className="flex-1 items-center justify-center">
  //     <CameraView
  //       //facing={CameraType.back}
  //       style={{ flex: 1 }}
  //     />
  //   </SafeAreaView>
  // );
  //   const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    // function toggleCameraFacing() {
    //     setFacing(current => (current === 'back' ? 'front' : 'back'));
    // }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera}
                        // facing={facing}
                onBarcodeScanned={({ data }) => {
                    console.log('Scanned barcode:', data);
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

