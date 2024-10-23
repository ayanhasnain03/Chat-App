import {
  AddOutlined,
  DeleteOutline,
  Done,
  Edit,
  KeyboardBackspace,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AvatarCard from "../components/shared/AvatarCard";
import { Link } from "../components/styles/StyledComponent";
import { chats } from "../constants/sampleData";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);

const Groups = () => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");

  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile drawer
  const handleMobile = () => setIsMobileOpen((prev) => !prev);
  const handleMobileClose = () => setIsMobileOpen(false);

  const updateGroupNameHandler = () => {
    setGroupName(groupNameUpdatedValue);
    setIsEdit(false);
  };

  const openConfirmDeleteHandler = () => {
    setIsConfirmDeleteOpen(true);
  };

  const closeConfirmDeleteHandler = () => {
    setIsConfirmDeleteOpen(false);
  };

  const openAddMemberHandler = () => {
    console.log("Add member handler");
  };

  useEffect(() => {
    setIsEdit(false);
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId}`);
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const deleteHandler = () => {
    console.log("Group deleted");
    closeConfirmDeleteHandler();
  };

  const IconButtons = memo(() => (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            transition: "all 0.3s ease-in-out",
            ":hover": {
              bgcolor: "black",
              transform: "scale(1.2)",
            },
          }}
          onClick={() => navigate("/")}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  ));

  return (
    <Grid container height="100vh">
      {/* Sidebar for larger screens */}
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
          borderRight: "1px solid #ccc",
          bgcolor: "#f1f1f1",
        }}
        height="100%"
      >
        <GroupsList myGroups={chats} />
      </Grid>

      {/* Main content area */}
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <IconButtons />
        {groupName && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              padding="3rem"
              spacing="1rem"
            >
              {isEdit ? (
                <>
                  <TextField
                    value={groupNameUpdatedValue}
                    onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
                  />
                  <IconButton onClick={updateGroupNameHandler}>
                    <Done />
                  </IconButton>
                </>
              ) : (
                <>
                  <Typography variant="h4">{groupName}</Typography>
                  <IconButton onClick={() => setIsEdit(true)}>
                    <Edit />
                  </IconButton>
                </>
              )}
            </Stack>
            <Typography margin="2rem" alignSelf="flex-start" variant="body1">
              Members
            </Typography>

            <Stack
              maxWidth="45rem"
              width="100%"
              boxSizing="border-box"
              padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
              spacing="2rem"
              height="50vh"
              overflow="auto"
            ></Stack>

            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              spacing="1rem"
              p={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}
            >
              <Button
                size="large"
                color="error"
                startIcon={<DeleteOutline />}
                onClick={openConfirmDeleteHandler}
              >
                Delete Group
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<AddOutlined />}
                onClick={openAddMemberHandler}
              >
                Add Member
              </Button>
            </Stack>
          </>
        )}
      </Grid>

      {isConfirmDeleteOpen && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={isConfirmDeleteOpen}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      {/* Drawer for mobile screens */}
      <Drawer open={isMobileOpen} onClose={handleMobileClose}>
        <GroupsList w="50vw" />
      </Drawer>
    </Grid>
  );
};

// GroupsList component rendering group items or fallback when empty
const GroupsList = ({ w = "100%", myGroups = [] }) => (
  <Stack sx={{ width: w, padding: "1rem" }}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => <GroupListItem key={group._id} group={group} />)
    ) : (
      <Typography>No groups available</Typography>
    )}
  </Stack>
);

// GroupListItem is memoized for performance optimization
const GroupListItem = memo(({ group }) => {
  const { name, avatar, _id } = group;

  return (
    <Link to={`?group=${_id}`}>
      <Stack direction="row" spacing={2} alignItems="center">
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
