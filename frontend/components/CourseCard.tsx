import { View, Text, Image, TouchableOpacity } from "react-native";

interface CourseCardProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const CourseCard = ({ id, title, subtitle, image }: CourseCardProps) => {
  
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
    
      //! Causes an error: Upon implementation of backend. 
      //! Remove the comment slashes to enable navigation and import router.
      //onPress={() => router.push(`/course/${id}`)} 
      
      className="relative w-32 h-48 mr-3 rounded-2xl overflow-hidden bg-slate-800"
    >
      
      <Image 
        source={{ uri: image }} 
        className="absolute w-full h-full opacity-70" 
      />

      <View className="absolute inset-0 bg-black/20" />

      <View className="flex-1 justify-end p-3">
        <Text className="text-white font-bold text-sm leading-tight mb-1">
          {title}
        </Text>
        <Text className="text-gray-300 text-[10px]">
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};