import React,{useState, useEffect} from 'react';

import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function History  () {
    const [history, setHistory] = useState([]);
    const fetchHistory = async () => {
        try {
            const storedHistory = await AsyncStorage.getItem('scanResult');
            if (storedHistory) {
                setHistory(JSON.parse(storedHistory));
            }
        } catch (error) {
            console.error('Failed to fetch scan history:', error);
        }
    };
    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <View className="flex-1 m-2">
            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className="bg-white rounded-md p-2 mb-2 flex w-full">
                        <Text className="text-lg font-bold mb-2">{item.text}</Text>
                        <Text className="text-sm">{item.link}</Text>
                    </View>
                )}                   
            />
        </View>
    );
}


 
