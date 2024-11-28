import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  SearchRounded as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assests/chat.png";
import { cyan } from "../../constants/color";
import { useDispatch } from "react-redux";
import { userNotExist } from "../../redux/reducer/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../constants/config";
const Search = lazy(() => import("../specific/Search"));
const Newgroup = lazy(() => import("../specific/Newgroup"));
const Notifications = lazy(() => import("../specific/Notifications"));

const Header = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotifiction, setIsNotifiction] = useState(false);

  const navigate = useNavigate();
  const toggleHanler = () => {
    setToggle((prev) => !prev);
  };

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotifiction((prev) => !prev);
  };

  const logOutHandler = async() => {

const {data}= await axios.post(`${server}/api/v1/user/logout`);
dispatch(userNotExist());
console.log(data);
  };

  const naviagteToGroup = () => navigate("/groups");
  return (
    <>
      <Box sx={{ flexGrow: 1, height: "4rem" }}>
        <AppBar position="static" sx={{ bgcolor: cyan }}>
          <Toolbar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <img src={Logo} alt="logo" style={{ height: "3rem" }} />
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={toggleHanler}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="manage group"
                icon={<GroupIcon />}
                onClick={naviagteToGroup}
              />
              <IconBtn
                title="Notification"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title="Log Out"
                icon={<LogoutIcon />}
                onClick={logOutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isGroup && (
        <Suspense fallback={<Backdrop open />}>
          <Newgroup />
        </Suspense>
      )}
      {isNotifiction && (
        <Suspense fallback={<Backdrop open />}>
          <Notifications />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
