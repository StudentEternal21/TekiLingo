import { View, TouchableOpacity, Platform } from "react-native";

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
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
    <View className="w-20 h-20 rounded-full bg-orange-400 border-[4px] border-gray-100 justify-center items-center">
      {children}
    </View>
  </TouchableOpacity>
);

export default CustomTabBarButton;