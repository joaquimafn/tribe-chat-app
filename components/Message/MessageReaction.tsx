import { Text } from "react-native";
import { ReactionBadge } from "../styles-messages";
import { TReaction } from "@/types/message";

interface MessageReactionProps {
  authorId: string;
  reactions: TReaction[];
}

export function MessageReaction({ authorId, reactions }: MessageReactionProps) {
  return (
    <ReactionBadge author={authorId}>
      {reactions.map(({ value, uuid }) => (
        <Text key={uuid}>{value}</Text>
      ))}
    </ReactionBadge>
  );
}
