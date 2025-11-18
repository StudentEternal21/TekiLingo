import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const TekoProfile = () => {
    const router = useRouter()
    const insets = useSafeAreaInsets();
  return (
    <View className='flex-row w-full bg-white pb-4 border-gray-200 justify-between' style={{paddingTop: insets.top}}>
              <TouchableOpacity className='flex-row items-center'
                onPress={() => {
                  router.canGoBack() ? router.back() : router.replace('/')
                  
                }}
              >
                <Text className="text-blue-500 text-lg font-semibold">← Back</Text>
              </TouchableOpacity>
              <View className="flex-row items-center gap-3">
                    <View className="w-10 h-10 rounded-full bg-slate-500" />
                    <View className="items-start">
                      <Text className="text-gray-700 font-bold text-sm">TEKO</Text>
                      <Text className="text-gray-500 text-xs italic">Feeling helpful today...</Text>
                    </View>
                    
                </View>

                <View className="w-10 h-10 rounded-full bg-slate-500" />
    </View>
  )
}

export default TekoProfile