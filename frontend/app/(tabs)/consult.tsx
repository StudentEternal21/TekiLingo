import { View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import ConsultPreview from '@/components/ConsultPreview';
import {useState, useCallback, useEffect} from 'react';
import TekoProfile from '@/components/TekoProfile';


export default function ConsultScreen() {

  const [messages, setMessages] = useState<IMessage[]>([]);
   useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <View  className='flex-1' >
      {/* <ConsultPreview/> */}
      <TekoProfile/>
        
      <GiftedChat
      messages={messages}
      onSend={(messages: any) => onSend(messages)}
      user={{
        _id: 1,
      }}

      bottomOffset={5}     
    />
    
    </View>
  );
}