import { View, Text, TextInput } from 'react-native'
import React from 'react'


interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  showLable?: boolean;
}

export default function CustomInput({
  placeholder = "Enter Text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
  showLable = true
} : CustomInputProps) {

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View className='w-full'>
      {
        showLable &&
        <Text className='label pb-3'>{label}</Text> 
      }
      <TextInput 
        autoCapitalize='none' 
        autoCorrect={false} 
        value={value} 
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}

        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}

        placeholder={placeholder}
        placeholderTextColor={"#a0a0a0ff"}
        className='rounded-full p-5 bg-white w-full h-15 border'
        />
    </View>
  )
}