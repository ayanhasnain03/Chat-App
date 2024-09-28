import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Skeleton,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React, { memo, useState } from "react";
import { sampleNotifications } from "../../constants/sampleData";

const Notifications = () => {
  const [isLoading, setIsLoading] = useState(false);
  const friendRequestHandler = async ({ _id, accept }) => {
    setIsLoading(true);
    try {
      // Simulate API call
      console.log(_id, accept);
    } catch (error) {
      console.error("Failed to handle request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"} width="100%">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <DialogTitle sx={{ p: 0 }}>Notifications</DialogTitle>
          <IconButton size="small">
            <Close />
          </IconButton>
        </Stack>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Typography textAlign="center" mt={2}>
            0 notifications
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler, isLoading }) => {
  const { name, avatar } = sender;

  return (
    <ListItem sx={{ borderBottom: "1px solid #f0f0f0", py: 1.5 }}>
      <Stack direction="row" alignItems="center" spacing="1rem" width="100%">
        <Avatar src={avatar} alt={name} />

        <Typography
          variant="body2"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            "& button": { minWidth: "5rem" },
          }}
        >
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              height={30}
              width={60}
              sx={{ borderRadius: "0.5rem" }}
            />
          ) : (
            <>
              <Button
                size="small"
                variant="contained"
                onClick={() => handler({ _id, accept: true })}
              >
                Accept
              </Button>
              <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => handler({ _id, accept: false })}
              >
                Reject
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
