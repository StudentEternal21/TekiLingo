import { Tabs } from "expo-router";
import { Home, Search, MessageCircle } from "lucide-react-native";
import  CustomTabBarButton  from "@/components/CustomTabBarButton";

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
          backgroundColor: '#f3f4f6',
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
        name="consult"
        options={{
          title: "Consult",
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: () => <MessageCircle size={28} color="#ffffff" fill="currentColor" />,
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => <Search size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}