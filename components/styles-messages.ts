import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View<{ author?: string | undefined }>`
  flex-direction: "row";
  padding: 8px;
`;

export const AvatarUrl = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 8px;
`;

export const MessageBadge = styled.View<{ author: string }>`
  padding: 8px;
  background-color: ${(props) => (props.author === "you" ? "green" : "#ddd")};
  border-radius: 10px;
  width: 70%;
  margin-left: ${(props) => props.author === "you" && "30%"};
`;

export const ReactionBadge = styled.View<{ author: string }>`
  flex-direction: "row";
  position: "absolute";
  left: ${(props) => props.author !== "you" && "2%"};
  right: ${(props) => props.author === "you" && "-95%"};
`;

export const Attachment = styled(Image)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const HourMessage = styled.Text`
  align-self: flex-end;
`;

export const ParticipantName = styled.Text`
  font-weight: 600;
  margin-bottom: 10px;
`;
