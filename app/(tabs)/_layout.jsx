import { Tabs, Slot } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "ScanQR",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="qrcode" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="history" color={color} />
          ),
        }}
      />
    </Tabs>
  );
  }
