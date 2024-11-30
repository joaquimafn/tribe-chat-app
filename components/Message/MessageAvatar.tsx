import useParticipants from "@/store/participants";
import { AvatarUrl } from "../styles-messages";
import { useMemo } from "react";

const DEFAULT_AVATAR_URL =
  "https://t3.ftcdn.net/jpg/05/00/54/28/360_F_500542898_LpYSy4RGAi95aDim3TLtSgCNUxNlOlcM.jpg";

interface MessageAvatarProps {
  participantId: string;
}

export function MessageAvatar({ participantId }: MessageAvatarProps) {
  const { participants } = useParticipants();

  function getInformationParticipant(participantId: string) {
    return participants.find(
      (participant) => participant.uuid === participantId
    );
  }

  const participantInfo = useMemo(
    () => getInformationParticipant(participantId),
    [participantId]
  );
  const AVATAR_URL = useMemo(
    () => participantInfo?.avatarUrl || DEFAULT_AVATAR_URL,
    [participantInfo]
  );

  return (
    participantId !== "you" && (
      <AvatarUrl source={AVATAR_URL} contentFit="cover" transition={1000} />
    )
  );
}
