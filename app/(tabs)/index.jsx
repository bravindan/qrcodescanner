import { Text, View } from "react-native";
import "../../global.css"; 
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function Index() {
  const [facing, setFacing] = useState("back")
  const [permission, requestPermission] = useCameraPermissions();

  //  if (!permission) {
  //    // Camera permissions are still loading.
  //    return <View />;
  //  }

  //  if (!permission.granted) {
  //    // Camera permissions are not granted yet.
  //    return (
  //      <View style={styles.container}>
  //        <Text style={styles.message}>
  //          We need your permission to show the camera
  //        </Text>
  //        <Button onPress={requestPermission} title="grant permission" />
  //      </View>
  //    );
  //  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Camera View</Text>
    </SafeAreaView>
  );
}
