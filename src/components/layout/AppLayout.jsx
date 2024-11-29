import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { chats } from "../../constants/sampleData";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
import Header from "./Header";
import { useMyChatsQuery } from "../../redux/api/api";
import RotateLoader from "./Loader";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;


const {data,isLoading}=useMyChatsQuery("")


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
         {
          isLoading ? (
           <RotateLoader/>
          ) : (
            <ChatList
              chats={data?.chats}
              handleDeleteChat={handleDeleteChat}
              chatId={chatId}
            />
          )
         }
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              padding: "2rem",
              bgcolor: "#000000",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
