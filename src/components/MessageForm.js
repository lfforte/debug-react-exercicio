import { React, useState } from "react";
import {
  MessageFormContainer,
  SendButton,
  TextInput,
  UserSelect
} from "./StyledMessageForm";

function MessageForm(props) {
  const [userValue, setUserValue] = useState("eu");
  const [textValue, setTextValue] = useState("");

  const onChangeUser = (event) => {
    setUserValue(event.target.value);
  };

  const onChangeText = (event) => {
    setTextValue(event.target.value);
  };

  const onSendMessage = (event) => {
    event.preventDefault();
    const message = {
      user: userValue,
      text: textValue
    };

    props.addMessage(message);

    setTextValue("");
  };

  return (
    // desafio: com a tag form é possível fazer o envio da mensagem com o botão "enter"
    <MessageFormContainer onSubmit={onSendMessage}>
      <UserSelect type="text" onChange={onChangeUser} value={userValue}>
        <option>eu</option>
        <option>Turma</option>
      </UserSelect>

      <TextInput
        type="text"
        placeholder={"Mensagem"}
        onChange={onChangeText}
        value={textValue}
      />
      <SendButton type="submit"> Enviar</SendButton>
    </MessageFormContainer>
  );
}

export { MessageForm }
