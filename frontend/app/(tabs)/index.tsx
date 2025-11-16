import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MessageSquare } from "lucide-react-native";
import Header from "@/components/Header";
import TrendingNews from "@/components/TrendingNews";
import { FloatingChatButton } from "@/components/FloatingChatTabButton";

// Mock Data
const COURSES = [
  { id: 1, title: "Navigating the WEB.", subtitle: "Click Here to Continue", image: "[https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)" },
  { id: 2, title: "Fight the frauds.", subtitle: "Click Here to Continue", image: "[https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80)" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
      <Header/>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-slate-700 mb-4 pl-2">Trending News</Text>
        <TrendingNews/>
        
        {/* My Courses List */}
        <View className="mt-8 px-4">
          <Text className="text-xl font-bold text-slate-700 mb-4">My Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {COURSES.map((course) => (
              <TouchableOpacity 
                key={course.id}
                activeOpacity={0.8}
                onPress={() => router.push(`/course/${course.id}`)}
                className="relative w-32 h-48 mr-3 rounded-2xl overflow-hidden bg-slate-800"
              >
                <Image source={{ uri: course.image }} className="absolute w-full h-full opacity-70" />
                <View className="flex-1 justify-end p-3">
                  <Text className="text-white font-bold text-sm leading-tight mb-1">{course.title}</Text>
                  <Text className="text-gray-300 text-[10px]">{course.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <FloatingChatButton/>
    </View>
  );
}
