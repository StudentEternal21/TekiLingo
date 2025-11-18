import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
const TekoProfile = () => {
    const router = useRouter()
    const insets = useSafeAreaInsets();
  return (
    <View className='flex-row w-full bg-white pb-2 border-gray-200 gap-2' style={{paddingTop: insets.top}}>
              <TouchableOpacity className='flex-row items-center'
                onPress={() => {
                  router.canGoBack() ? router.back() : router.replace('/')
                  
                }}
              >
                <Text className="text-orange-500 text-lg font-semibold">← Back</Text>
              </TouchableOpacity>
              <View className="flex-row items-center gap-3">
                    <View className="w-10 h-10 rounded-full bg-slate-500" />
                    <View className="items-start">
                      <Text className="text-gray-700 font-bold text-sm">TEKO</Text>
                      <Text className="text-gray-500 text-xs italic">Feeling helpful today...</Text>
                    </View>
                    
                </View>

                <TouchableOpacity 
                className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center ml-auto mr-2"
                 onPress={() => console.log("Call pressed")}
                 >
                    <Ionicons name="call" size={20} color="#f97316" /> 
                </TouchableOpacity>
    </View>
  )
}

export default TekoProfile