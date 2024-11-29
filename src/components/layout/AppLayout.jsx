import { Drawer, Grid, IconButton } from "@mui/material";
import { useParams } from "react-router-dom";

import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
import Header from "./Header";
import { useMyChatsQuery } from "../../redux/api/api";
import RotateLoader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../../redux/reducer/misc";
import { Close } from "@mui/icons-material";
import { useErrors } from "../../hooks/hook";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
const dispatch = useDispatch();
const {isMobile}=useSelector(state=>state.misc)
const handleMobileClose = () => dispatch(setIsMobile(false));
const {data,isLoading,isError,error}=useMyChatsQuery("")
useErrors([{isError,error}])

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(
        "Delete chat triggered with ID:",
        _id,
        "Group Chat:",
        groupChat
      );
    };

    return (
      <>
        <Title />
        <Header />



{
  isLoading ? (
    <RotateLoader/>
  ):(
<Drawer open={isMobile} onClose={handleMobileClose}>
  <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
    <IconButton onClick={handleMobileClose}>
<Close/>
    </IconButton>
  </div>
  <ChatList
    w="70vw"
    chats={data?.chats}
    handleDeleteChat={handleDeleteChat}
    chatId={chatId}
  />
</Drawer>
  )
}


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
