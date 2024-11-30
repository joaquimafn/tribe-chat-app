import { Text } from "react-native";
import { HourMessage } from "../styles-messages";

interface MessageContentProps {
  text: string;
  isEdited: boolean;
}

export function MessageHour({ text, isEdited }: MessageContentProps) {
  return (
    <HourMessage>
      <Text>
        {isEdited && "Edited "}
        {text}
      </Text>
    </HourMessage>
  );
}
