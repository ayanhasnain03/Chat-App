import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponents = ({ message, user }) => {
  const { attachments = [], sender, content, createdAt } = message;
  const sameSender = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#e1ffc7" : "#ffffff",
        color: "#333",
        padding: "1rem",
        borderRadius: "1rem",
        maxWidth: "60%",
        marginLeft: sameSender ? "auto" : "1rem",
        marginRight: sameSender ? "1rem" : "auto",
        boxShadow: sameSender
          ? "0 2px 4px rgba(0, 0, 0, 0.1)"
          : "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!sameSender && (
        <Typography color={"#555"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && (
        <Typography variant="body1" fontWeight={500}>
          {content}
        </Typography>
      )}

      {attachments?.length > 0 &&
        attachments?.map((attachments, index) => {
          const url = attachments.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{ textDecoration: "none", color: "black" }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography
        variant="caption"
        color={"#888"}
        style={{ marginTop: "0.5rem" }}
      >
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponents);
