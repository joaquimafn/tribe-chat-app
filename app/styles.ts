import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 8px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

export const Input = styled.TextInput`
  background-color: #c5c5c5;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 30px;
  padding-left: 40px;
  height: 50px;
  width: 80%;
`;

export const ButtonSend = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  border-radius: 50px;
`;
