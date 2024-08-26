import { useParams } from "react-router-dom";
import { chats } from "../../constants/sampleData";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Header from "./Header";
import { Grid } from "@mui/material";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(
        "Delete chat triggered with ID:",
        _id,
        "Group Chat:",
        groupChat
      );
      // Add additional logic for deleting the chat if necessary
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" }, bgcolor: "#fff" }}
            height={"100%"}
          >
            <ChatList
              chats={chats}
              chatId={chatId}
              // newMessagesAlert={[
              //   {
              //     chatId,
              //     count: 4,
              //   },
              // ]}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            bgcolor={"red"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.1)",
            }}
          >
            first
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
