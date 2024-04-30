import { useState } from "react";
import { MessageForm } from "./components/MessageForm"
import Message from "./components/Message";
import { AppContainer, MessagesContainer } from "./AppStyled";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const newListMessage = [...messages, message];
    setMessages(newListMessage);
  };

  const deleteMessage = (message) => {
    const filterResult = messages.filter((msg) => msg === message);
    setMessages(filterResult);
  };
  const resultMessageMapping = messages.map((message, index) => (
    <Message deleteMessage={deleteMessage} message={message} key={index} />
  ));

  return (
    <AppContainer>
      <GlobalStyle />
      <MessagesContainer>{resultMessageMapping}</MessagesContainer>
      <MessageForm addMessage={addMessage} />
    </AppContainer>
  );
}
export default App;
