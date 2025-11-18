import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';
import Header from "@/components/Header"; 
import CustomInput from '@/components/CustomInput';
import { DISCOVER_DATA } from '@/constants/mockdata';
import { CourseCard } from '@/components/CourseCard';

export default function ConsultScreen() {
  return (
    <SafeAreaView className="items-center bg-gray-100">
      <Header />
      <FlatList
        data = {DISCOVER_DATA}
        numColumns={3}
        renderItem={({item, index}) => {
          return (<CourseCard key={item.id} {...item}></CourseCard>);
        }}
        ListHeaderComponent={() => { return (
          <View className="w-full px-4 mt-4 mb-5">
            <CustomInput 
              label='Search' 
              placeholder='Enter course title' 
              value={""} 
              onChangeText={() => {}} 
              keyboardType="default"
            ></CustomInput>
          </View>
        );}}
        contentContainerClassName='gap-5'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}