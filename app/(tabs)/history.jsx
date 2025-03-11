import React from 'react';

import { View, Text, FlatList } from "react-native";

const history = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" },
    { id: "5", text: "Item 5" },
    { id: "6", text: "Item 6" },
    { id: "7", text: "Item 7" },
    { id: "8", text: "Item 8" },
    { id: "9", text: "Item 9" },
    { id: "10", text: "Item 10" },
    { id: "11", text: "Item 11" },
    { id: "12", text: "Item 12" },
    { id: "13", text: "Item 13" },
    { id: "14", text: "Item 14" },
    { id: "15", text: "Item 15" },
    { id: "16", text: "Item 16" },
    { id: "17", text: "Item 17" },
    { id: "18", text: "Item 18" },
    { id: "19", text: "Item 19" },
    { id: "20", text: "Item 20" },
    { id: "21", text: "Item 21" },
    { id: "22", text: "Item 22" },
    { id: "23", text: "Item 23" },
    { id: "24", text: "Item 24" },
    { id: "25", text: "Item 25" },
    { id: "26", text: "Item 26" },
    { id: "27", text: "Item 27" },
    { id: "28", text: "Item 28" },
    { id: "29", text: "Item 29" },
    { id: "30", text: "Item 30" },
    { id: "31", text: "Item 31" },
    { id: "32", text: "Item 32" },
    { id: "33", text: "Item 33" },
    { id: "34", text: "Item 34" },
    { id: "35", text: "Item 35" },
    { id: "36", text: "Item 36" },
    { id: "37", text: "Item 37" },
    { id: "38", text: "Item 38" },
    { id: "39", text: "Item 39" },
    { id: "40", text: "Item 40" },
    { id: "41", text: "Item 41" },
    { id: "42", text: "Item 42" },
    { id: "43", text: "Item 43" },
    { id: "44", text: "Item 44" },
    { id: "45", text: "Item 45" },
    { id: "46", text: "Item 46" },
    { id: "47", text: "Item 47" },
    { id: "48", text: "Item 48" },
    { id: "49", text: "Item 49" },
    { id: "50", text: "Item 50" },
    ];

export default function History  () {
    return (
        <View className="flex-1 m-2">
            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className="bg-white rounded-md p-2 mb-2 flex w-full">
                        <Text className="text-lg font-bold mb-2">{item.text}</Text>
                    </View>
                )}                   
            />
        </View>
    );
}


 
