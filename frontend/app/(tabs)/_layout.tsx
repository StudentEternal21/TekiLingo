import { Tabs } from "expo-router";
import { View, TouchableOpacity, Platform } from "react-native";
import { Home, Search, MessageCircle, Mail } from "lucide-react-native";
import '../globals.css';
// 🎨 Custom Floating Button Component using NativeWind
const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30, // Hard to do negative top with standard tailwind classes sometimes, keeping style for precision
      justifyContent: 'center',
      alignItems: 'center',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
        android: { elevation: 5 },
      })
    }}
  >
    {/* NativeWind Styling Here: Orange circle with white border */}
    <View className="w-16 h-16 rounded-full bg-orange-400 border-[4px] border-gray-100 justify-center items-center">
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#f3f4f6', // Matches bg-gray-100
          borderTopWidth: 0,
          height: 90, 
          paddingBottom: 30,
        },
        tabBarActiveTintColor: '#1f2937',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => <Search size={24} color={color} />,
        }}
      />
      
      {/* MIDDLE TAB: CONSULT */}
      <Tabs.Screen
        name="consult"
        options={{
          title: "Consult",
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: () => <MessageCircle size={28} color="#ffffff" fill="currentColor" />,
        }}
      />

    </Tabs>
  );
}
