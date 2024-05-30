import { Box, Button, Container, FormControl, Input, VStack, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "John Doe" },
    { id: 2, text: "Hi there!", sender: "You" },
  ]);

  const handleSendMessage = () => {
    setMessages([...messages, { id: messages.length + 1, text: message, sender: "You" }]);
    setMessage("");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10} width="100%">
        <Box width="100%" borderWidth="1px" borderRadius="lg" p={4}>
          {messages.map((msg) => (
            <HStack key={msg.id} justify={msg.sender === "You" ? "flex-end" : "flex-start"}>
              <Text>{msg.text}</Text>
            </HStack>
          ))}
        </Box>
        <FormControl id="message">
          <HStack>
            <Input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button colorScheme="blue" onClick={handleSendMessage}>
              Send
            </Button>
          </HStack>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Chat;