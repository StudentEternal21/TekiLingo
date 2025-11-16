import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";

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
  return (
<View>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 32}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
    >
      {TRENDING_DATA.map((item) => (
        <TouchableOpacity 
          key={item.id}
          className={`mr-4 h-48 rounded-3xl overflow-hidden relative shadow-lg ${item.color}`}
          style={{ width: width - 48 }} 
        >
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
        </TouchableOpacity>
      ))}
    </ScrollView>
    
    <View className="flex-row justify-center gap-2 mt-1">
      <View className="w-2 h-2 rounded-full bg-slate-400" />
      <View className="w-2 h-2 rounded-full bg-slate-300" />
      <View className="w-2 h-2 rounded-full bg-slate-300" />
    </View>
  </View>
  )
}

export default TrendingNews