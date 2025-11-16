import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/Header"; 
import TrendingNews  from "@/components/TrendingNews"; 
import { CourseCard } from "@/components/CourseCard";



// Mock Data
const COURSES = [
  { 
    id: 1, 
    title: "Navigating the WEB.", 
    subtitle: "Click Here to Continue", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    title: "Fight the frauds.", 
    subtitle: "Click Here to Continue", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    title: "AI in modern world.", 
    subtitle: "Click Here to Continue", 
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" 
  },
];

const RECOMMENDED = [
  { 
    id: 4, 
    title: "What is blockchain?", 
    subtitle: "Click Here to Begin", 
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80" 
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
      <Header/>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mt-4">
          <Text className="text-xl font-bold text-slate-700 pl-2">Trending News</Text>
          <TrendingNews/>
        </View>
        
        <View className="mt-8 px-4">
          <Text className="text-xl font-bold text-slate-700 mb-4">My Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {COURSES.map((course) => (
              <CourseCard 
                key={course.id} 
                {...course} 
              />
            ))}
          </ScrollView>
        </View>


        <View className="mt-6 px-4 pb-24">
          <Text className="text-xl font-bold text-slate-700 mb-4">Recommended Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {RECOMMENDED.map((course) => (
              <CourseCard 
                key={course.id} 
                {...course} 
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

    </View>
  );
}