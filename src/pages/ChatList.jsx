import { Box, Container, Heading, VStack, Text, HStack, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const navigate = useNavigate();

  const chats = [
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", lastMessage: "Let's catch up later!" },
  ];

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10} width="100%">
        <Heading>Chats</Heading>
        {chats.map((chat) => (
          <HStack
            key={chat.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
            onClick={() => navigate(`/chat/${chat.id}`)}
            cursor="pointer"
          >
            <Avatar name={chat.name} />
            <Box>
              <Text fontWeight="bold">{chat.name}</Text>
              <Text>{chat.lastMessage}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default ChatList;