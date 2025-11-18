import { View, Text, ScrollView } from "react-native";
import Header from "@/components/Header"; 
import TrendingNews  from "@/components/TrendingNews"; 
import { CourseCard } from "@/components/CourseCard";
import { COURSES, RECOMMENDED } from "@/constants/mockdata";


export default function HomeScreen() {
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