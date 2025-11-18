import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='flex-row justify-between w-full items-center px-6 pb-3 bg-gray-100'>
      <View className="flex-row items-center gap-1">
        <View className="w-10 h-10 rounded-full bg-orange-500 justify-center items-center">
          <Text className="text-white font-bold text-xs">TEKO</Text>
        </View>
        <Text className="text-pink-400 text-xl font-bold">Lingo</Text>
    </View>

    <View className="flex-row items-center gap-3">
      <View className="items-end">
        <Text className="text-gray-700 font-bold text-sm">KaiserLycan</Text>
        <Text className="text-gray-500 text-xs italic">Beginner</Text>
      </View>
      
      
      <View className="w-10 h-10 rounded-full bg-slate-500" />
    </View>

    </View> 
  )
}

export default Header