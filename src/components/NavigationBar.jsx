import { Box, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <Box bg="blue.500" p={4} color="white">
      <HStack spacing={4}>
        <Button variant="link" color="white" onClick={() => navigate("/chats")}>
          Chats
        </Button>
        <Button variant="link" color="white" onClick={() => navigate("/profile")}>
          Profile
        </Button>
      </HStack>
    </Box>
  );
};

export default NavigationBar;