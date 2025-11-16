import { TouchableOpacity } from "react-native";
import { MessageSquare } from "lucide-react-native";

export const FloatingChatTabButton = () => (
  <TouchableOpacity 
    className="absolute bottom-28 right-4 bg-orange-400 p-4 rounded-full rounded-br-none shadow-lg z-50"
    activeOpacity={0.8}
  >
     <MessageSquare color="white" size={24} fill="currentColor" />
  </TouchableOpacity>
);