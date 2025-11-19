import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type LessonButtonProps = {
  title: string;
  lessonNumber: number;
  totalLessons: number;
  type: 'text' | 'game';
  isLocked?: boolean;
  onPress: () => void;
};

export default function LessonButton({ 
  title, 
  lessonNumber, 
  totalLessons, 
  type, 
  isLocked = false, 
  onPress 
}: LessonButtonProps) {
  
  return (
    <Pressable 
      onPress={onPress}
      disabled={isLocked}

      className={`flex-row items-center justify-between p-5 mb-3 rounded-2xl ${
        isLocked ? 'bg-gray-300 opacity-50' : 'bg-[#404b69]' 
      }`}
    >
      {/* Left Side: Text Info */}
      <View className="flex-1 mr-4">
        <Text className="text-white text-lg font-bold mb-1" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-gray-400 text-xs uppercase tracking-wider">
          Lesson {lessonNumber}/{totalLessons} • {type === 'game' ? 'Interactive' : 'Reading'}
        </Text>
      </View>

      {/* Right Side: Dynamic Icon */}
      <View className="bg-[#535f80] p-3 rounded-full">
        <Ionicons 
          // Swaps icon based on type
          name={type === 'game' ? "game-controller" : "book"} 
          size={24} 
          color={isLocked ? "#888" : "#FFB066"} // Orange tint for active icons
        />
      </View>
    </Pressable>
  );
}