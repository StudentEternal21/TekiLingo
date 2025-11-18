import { View, Text } from 'react-native'
import { MessageCircle } from 'lucide-react-native'
import React from 'react'

const ConsultPreview = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-24 h-24 bg-orange-100 rounded-full mb-6 justify-center items-center">
        <MessageCircle size={48} color="#f97316" fill="currentColor" />
      </View>
      <Text className="text-2xl font-bold text-slate-800 mb-2">Consultation</Text>
      <Text className="text-gray-500 text-center px-10">
       Chat with Teko to help guide you to your tech worries.
      </Text>
    </View>
  )
}

export default ConsultPreview