import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import ChatList from "./pages/ChatList.jsx";
import Chat from "./pages/Chat.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<ChatList />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;