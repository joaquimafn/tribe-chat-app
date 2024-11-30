import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { useQuery } from "@tanstack/react-query";
import { TMessage, TMessageJSON, TParticipant } from "@/types/message";
import { fetchAllParticipants, fetchLatestMessages } from "@/api/services";
import { Message } from "@/components/Message";
import { ButtonSend, Container, ContainerInput, Input } from "./styles";
import apiClient from "@/api/apiClient";
import useParticipants from "@/store/participants";

function Home() {
  const [newMessage, setNewMessage] = useState("");
  const { updateAllParticipants } = useParticipants();

  const {
    data: messages,
    isSuccess,
    refetch,
  } = useQuery<TMessageJSON[]>({
    queryKey: ["latestMessages"],
    queryFn: fetchLatestMessages,
  });

  const { data: participants, isSuccess: participantsSuccess } = useQuery<
    TParticipant[]
  >({
    queryKey: ["allParcitipants"],
    queryFn: fetchAllParticipants,
  });

  useEffect(() => {
    participants && updateAllParticipants(participants);
  }, [participantsSuccess, participants]);

  async function handleSendMessage() {
    if (!newMessage || newMessage.length === 0) {
      Alert.alert("Invalidate Input", "Send a message with characteres");
      return;
    }

    await apiClient.post("/messages/new", {
      text: newMessage,
    });

    setNewMessage("");
    refetch();
  }

  const renderItem = useCallback(
    //@ts-ignore
    ({ item }) => (
      <Message.Root>
        <Message.Avatar participantId={item.authorUuid} />
        <Message.Content
          authorId={item.authorUuid}
          text={item.text}
          attachments={item.attachments}
          sentAt={item.sentAt}
          updatedAt={item.updatedAt}
        />
        <Message.Reaction
          authorId={item.authorUuid}
          reactions={item.reactions}
        />
      </Message.Root>
    ),
    []
  );

  return (
    <>
      <Container>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.uuid}
          renderItem={renderItem}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 50 * index,
            index,
          })}
          initialScrollIndex={messages && messages?.length - 1}
        />
      </Container>

      <ContainerInput>
        <Input
          placeholder="Message"
          value={newMessage}
          onChangeText={(text) => {
            setNewMessage(text);
          }}
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />
        <ButtonSend onPress={handleSendMessage}>
          <FontAwesome name="paper-plane" size={20} />
        </ButtonSend>
      </ContainerInput>
    </>
  );
}

export default React.memo(Home);
