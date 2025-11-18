import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat, IMessage, Bubble, Send, BubbleProps } from 'react-native-gifted-chat';
import { useState, useCallback, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import TekoProfile from '@/components/TekoProfile';
// import ConsultPreview from '@/components/ConsultPreview'; 

export default function ConsultScreen() {
  const orange = '#f97316';
  const insets = useSafeAreaInsets();
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
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = (props: BubbleProps<IMessage>) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: orange, 
          },
          right: {
            backgroundColor: '#0084ff',
          },
        }}
        textStyle={{
          left: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    const { text } = props;

    const hasText = text && text.trim().length > 0;

    return (
      <View className="flex-row items-center justify-center gap-2 px-[14px] mr-2 mb-2">
        {hasText ? (
          <Send {...props} containerStyle={{ justifyContent: 'center' }}>
            <Ionicons name="send" size={24} color={orange} />
          </Send>
        ) : (
          <TouchableOpacity onPress={() => console.log('Open Camera')}>
            <Ionicons name="camera-outline" size={30} color={orange} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1" style={{ marginBottom: insets.bottom }}>
      {/* <ConsultPreview/> */}
      <TekoProfile />

      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        bottomOffset={insets.bottom}
        renderBubble={renderBubble}
        alwaysShowSend={true} 
        renderSend={renderSend}
        textInputProps={{
          style: styles.textInput
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#f1f5f9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 12,
    marginTop: 6,
    marginBottom: 6,
    color: '#000000'
  },
});