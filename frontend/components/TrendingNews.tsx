import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, Pressable, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import React, {useState} from "react";
const { width } = Dimensions.get('window');

const TRENDING_DATA = [
  {
    id: 1,
    title: "AI Voice Scams",
    desc: "Synthesized voices are being used for scams. Be careful who you talk to.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
    color: "bg-purple-900"
  },
  {
    id: 2,
    title: "Quantum Computing",
    desc: "Understanding the basics of Qubits and the future of processing power.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-900"
  },
  {
    id: 3,
    title: "Cybersecurity 101",
    desc: "Essential habits to protect your digital identity in 2025.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    color: "bg-slate-900"
  }
];


const TrendingNews = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    
    setActiveIndex(index);

    };

    
  return (
<View>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: 0, paddingVertical: 8 }}
      pagingEnabled
      onMomentumScrollEnd={handleScroll}
    >
      {TRENDING_DATA.map((item) => (
        <Pressable
          key={item.id}
          className={` h-48 overflow-hidden relative shadow-lg ${item.color}`}
          style={{ width: width}} 
        >
            {({ pressed }) => (
            <>
            <Image 
                source={{ uri: item.image }} 
                className="absolute w-full h-full opacity-60"
            />
            <View className="p-6 justify-center h-full">
                <Text className="text-white text-2xl font-bold mb-2">{item.title}</Text>
                <Text className="text-gray-200 text-xs w-3/4 mb-4 leading-5">
                {item.desc}
                </Text>
                <Text className="text-white text-xs font-bold underline">learn more</Text>

            </View>
            {pressed && (
                <View className="absolute w-full h-full bg-black opacity-20" />
              )}
            </>
          )}
        </Pressable>
      ))}
    </ScrollView>
    <View className="flex-row justify-center gap-2 mt-1">
      {TRENDING_DATA.map((_, index) => (
        <View
          key={index}
          className={`
            w-3 h-3 rounded-full 
            ${activeIndex === index ? 'bg-slate-600' : 'bg-slate-300'}
          `}
        />
        ))}
    </View>         
  </View>
  )
}

export default TrendingNews