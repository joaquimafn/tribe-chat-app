import { Text } from "react-native";
import { Attachment, MessageBadge, ParticipantName } from "../styles-messages";
import { TMessageAttachment, TReaction } from "@/types/message";
import { Message } from ".";
import { useMemo } from "react";
import { getHour } from "@/utils/convertTimestamp";
import useParticipants from "@/store/participants";

const DEFAULT_PARTICIPANT_NAME = "Whitout Name";

interface MessageContentProps {
  text: string;
  authorId: string;
  attachments?: TMessageAttachment[];
  sentAt: number;
  updatedAt: number;
}

export function MessageContent({
  text,
  authorId,
  attachments,
  sentAt,
  updatedAt,
}: MessageContentProps) {
  const formmatedHour = useMemo(() => getHour(sentAt), [sentAt]);
  const { participants } = useParticipants();

  function getInformationParticipant(participantId: string) {
    return participants.find(
      (participant) => participant.uuid === participantId
    );
  }

  const participantInfo = useMemo(
    () => getInformationParticipant(authorId),
    [authorId]
  );

  return (
    <MessageBadge author={authorId}>
      {authorId !== "you" && (
        <ParticipantName>
          {participantInfo?.name || DEFAULT_PARTICIPANT_NAME}
        </ParticipantName>
      )}
      {attachments?.map((image, index) => (
        <Attachment
          key={index}
          source={{ uri: `${image.url}` }}
          contentFit="cover"
          transition={1000}
        />
      ))}
      <Text>{text}</Text>
      <Message.Hour isEdited={sentAt !== updatedAt} text={formmatedHour} />
    </MessageBadge>
  );
}
