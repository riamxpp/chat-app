import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";

interface IPropsMessageSection {
  width: string;
  height: string;
  bgcolor: string;
}

const MessageSection = (props: IPropsMessageSection) => {
  const { currentChat } = useContext(ChatContext);

  if (!currentChat.messages) return <div></div>;
  return (
    <Box {...props} sx={{ overflow: "hidden" }}>
      <Box
        width="100%"
        height="100%"
        sx={{ overflow: "auto", marginTop: "10px" }}
      >
        {currentChat.messages.map((message, index) =>
          message.text.length === 1 ? (
            ""
          ) : (
            <Box
              key={index}
              width="100%"
              height="auto"
              display="flex"
              sx={{
                alignItems: "center",
                padding: "0 20px",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  maxWidth: "300px",
                  width: "auto",
                  padding: ".4rem",
                  borderRadius: "4px",
                  position: "relative",
                }}
                height="auto"
                bgcolor="#005c4b"
              >
                <Typography component="span" fontSize=".9rem" color="#fff">
                  {message.text}
                </Typography>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default MessageSection;
