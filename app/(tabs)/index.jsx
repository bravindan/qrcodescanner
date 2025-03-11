import { Text, SafeAreaView } from "react-native";
import "../../global.css"; 
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function Index() {

  const [permission, requestPermission] = useCameraPermissions();

  

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Camera View</Text>
    </SafeAreaView>
  );
}
