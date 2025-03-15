import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import "../../global.css"; 
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function Index() {
  const [facing, setFacing] = useState ("back");
  const [permission, requestPermission] = useCameraPermissions();

  if(!permission) {
    return <Text>No access to camera</Text>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold">We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission} className="bg-gray-800 rounded-lg p-2 mt-4">
          <Text className="text-white font-bold">Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }
 function toggleCameraFacing() {
   setFacing((current) => (current === "back" ? "front" : "back"));
 }
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <CameraView
        CameraType={facing}
        style={{ flex: 1 }}       
      />

      {/* <CameraView  className="flex-1 "></CameraView> */}
      {/* <View className="flex-row items-center justify-center">
        <TouchableOpacity onPress={toggleCameraFacing} title="">
          <Text>Switch Camera</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}
